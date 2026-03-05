"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccount = void 0;
/**
 * Returns the AWS account associated with this integration.
 */
class AWSAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccount.attributeTypeMap;
    }
}
exports.AWSAccount = AWSAccount;
/**
 * @ignore
 */
AWSAccount.attributeTypeMap = {
    accessKeyId: {
        baseName: "access_key_id",
        type: "string",
    },
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    accountSpecificNamespaceRules: {
        baseName: "account_specific_namespace_rules",
        type: "{ [key: string]: boolean; }",
    },
    cspmResourceCollectionEnabled: {
        baseName: "cspm_resource_collection_enabled",
        type: "boolean",
    },
    excludedRegions: {
        baseName: "excluded_regions",
        type: "Array<string>",
    },
    extendedResourceCollectionEnabled: {
        baseName: "extended_resource_collection_enabled",
        type: "boolean",
    },
    filterTags: {
        baseName: "filter_tags",
        type: "Array<string>",
    },
    hostTags: {
        baseName: "host_tags",
        type: "Array<string>",
    },
    metricsCollectionEnabled: {
        baseName: "metrics_collection_enabled",
        type: "boolean",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
    },
    roleName: {
        baseName: "role_name",
        type: "string",
    },
    secretAccessKey: {
        baseName: "secret_access_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccount.js.map