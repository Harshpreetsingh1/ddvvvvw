"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountDeleteRequest = void 0;
/**
 * List of AWS accounts to delete.
 */
class AWSAccountDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountDeleteRequest.attributeTypeMap;
    }
}
exports.AWSAccountDeleteRequest = AWSAccountDeleteRequest;
/**
 * @ignore
 */
AWSAccountDeleteRequest.attributeTypeMap = {
    accessKeyId: {
        baseName: "access_key_id",
        type: "string",
    },
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    roleName: {
        baseName: "role_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountDeleteRequest.js.map