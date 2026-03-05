"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQueueSASQueryParameters = generateQueueSASQueryParameters;
exports.generateQueueSASQueryParametersInternal = generateQueueSASQueryParametersInternal;
const QueueSASPermissions_js_1 = require("./QueueSASPermissions.js");
const storage_common_1 = require("@azure/storage-common");
const SasIPRange_js_1 = require("./SasIPRange.js");
const SASQueryParameters_js_1 = require("./SASQueryParameters.js");
const constants_js_1 = require("./utils/constants.js");
const utils_common_js_1 = require("./utils/utils.common.js");
function generateQueueSASQueryParameters(queueSASSignatureValues, sharedKeyCredentialOrUserDelegationKey, accountName) {
    return generateQueueSASQueryParametersInternal(queueSASSignatureValues, sharedKeyCredentialOrUserDelegationKey, accountName).sasQueryParameters;
}
function generateQueueSASQueryParametersInternal(queueSASSignatureValues, sharedKeyCredentialOrUserDelegationKey, accountName) {
    const version = queueSASSignatureValues.version
        ? queueSASSignatureValues.version
        : constants_js_1.SERVICE_VERSION;
    const sharedKeyCredential = sharedKeyCredentialOrUserDelegationKey instanceof storage_common_1.StorageSharedKeyCredential
        ? sharedKeyCredentialOrUserDelegationKey
        : undefined;
    let userDelegationKeyCredential;
    if (sharedKeyCredential === undefined && accountName !== undefined) {
        userDelegationKeyCredential = new storage_common_1.UserDelegationKeyCredential(accountName, sharedKeyCredentialOrUserDelegationKey);
    }
    if (sharedKeyCredential !== undefined) {
        return generateQueueSASQueryParametersDefault(queueSASSignatureValues, sharedKeyCredential);
    }
    else {
        if (version >= "2025-07-05") {
            return generateQueueSASQueryParametersUDK20250705(queueSASSignatureValues, userDelegationKeyCredential, accountName);
        }
        else {
            throw new RangeError("'version' must be >= '2025-07-05' when generating user delegation SAS using user delegation key.");
        }
    }
}
function generateQueueSASQueryParametersDefault(queueSASSignatureValues, sharedKeyCredential) {
    if (!queueSASSignatureValues.identifier &&
        !(queueSASSignatureValues.permissions && queueSASSignatureValues.expiresOn)) {
        throw new RangeError("Must provide 'permissions' and 'expiresOn' for Queue SAS generation when 'identifier' is not provided.");
    }
    const version = queueSASSignatureValues.version
        ? queueSASSignatureValues.version
        : constants_js_1.SERVICE_VERSION;
    let verifiedPermissions;
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    if (queueSASSignatureValues.permissions) {
        verifiedPermissions = QueueSASPermissions_js_1.QueueSASPermissions.parse(queueSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        queueSASSignatureValues.startsOn
            ? (0, utils_common_js_1.truncatedISO8061Date)(queueSASSignatureValues.startsOn, false)
            : "",
        queueSASSignatureValues.expiresOn
            ? (0, utils_common_js_1.truncatedISO8061Date)(queueSASSignatureValues.expiresOn, false)
            : "",
        getCanonicalName(sharedKeyCredential.accountName, queueSASSignatureValues.queueName),
        queueSASSignatureValues.identifier,
        queueSASSignatureValues.ipRange ? (0, SasIPRange_js_1.ipRangeToString)(queueSASSignatureValues.ipRange) : "",
        queueSASSignatureValues.protocol ? queueSASSignatureValues.protocol : "",
        version,
    ].join("\n");
    const signature = sharedKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new SASQueryParameters_js_1.SASQueryParameters(version, signature, verifiedPermissions, undefined, undefined, queueSASSignatureValues.protocol, queueSASSignatureValues.startsOn, queueSASSignatureValues.expiresOn, queueSASSignatureValues.ipRange, queueSASSignatureValues.identifier),
        stringToSign: stringToSign,
    };
}
function generateQueueSASQueryParametersUDK20250705(queueSASSignatureValues, userDelegationKeyCredential, accountName) {
    if (!(queueSASSignatureValues.permissions && queueSASSignatureValues.expiresOn)) {
        throw new RangeError("Must provide 'permissions' and 'expiresOn' for Queue SAS generation when generating user delegation SAS.");
    }
    const version = queueSASSignatureValues.version
        ? queueSASSignatureValues.version
        : constants_js_1.SERVICE_VERSION;
    let verifiedPermissions;
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    if (queueSASSignatureValues.permissions) {
        verifiedPermissions = QueueSASPermissions_js_1.QueueSASPermissions.parse(queueSASSignatureValues.permissions.toString()).toString();
    }
    const resource = "q";
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        queueSASSignatureValues.startsOn
            ? (0, utils_common_js_1.truncatedISO8061Date)(queueSASSignatureValues.startsOn, false)
            : "",
        queueSASSignatureValues.expiresOn
            ? (0, utils_common_js_1.truncatedISO8061Date)(queueSASSignatureValues.expiresOn, false)
            : "",
        getCanonicalName(accountName, queueSASSignatureValues.queueName),
        userDelegationKeyCredential.userDelegationKey.signedObjectId,
        userDelegationKeyCredential.userDelegationKey.signedTenantId,
        userDelegationKeyCredential.userDelegationKey.signedStartsOn
            ? (0, utils_common_js_1.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedStartsOn, false)
            : "",
        userDelegationKeyCredential.userDelegationKey.signedExpiresOn
            ? (0, utils_common_js_1.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedExpiresOn, false)
            : "",
        userDelegationKeyCredential.userDelegationKey.signedService,
        userDelegationKeyCredential.userDelegationKey.signedVersion,
        undefined, // shared key delegation signed tenant id.
        queueSASSignatureValues.delegatedUserObjectId,
        queueSASSignatureValues.ipRange ? (0, SasIPRange_js_1.ipRangeToString)(queueSASSignatureValues.ipRange) : "",
        queueSASSignatureValues.protocol ? queueSASSignatureValues.protocol : "",
        version,
    ].join("\n");
    const signature = userDelegationKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new SASQueryParameters_js_1.SASQueryParameters(version, signature, verifiedPermissions, undefined, undefined, queueSASSignatureValues.protocol, queueSASSignatureValues.startsOn, queueSASSignatureValues.expiresOn, queueSASSignatureValues.ipRange, queueSASSignatureValues.identifier, resource, userDelegationKeyCredential.userDelegationKey, queueSASSignatureValues.delegatedUserObjectId),
        stringToSign: stringToSign,
    };
}
function getCanonicalName(accountName, queueName) {
    // Queue: "/queue/account/queueName"
    return `/queue/${accountName}/${queueName}`;
}
//# sourceMappingURL=QueueSASSignatureValues.js.map