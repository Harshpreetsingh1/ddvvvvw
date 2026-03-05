"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAuthConfigRole = void 0;
/**
 * AWS Authentication config to integrate your account using an IAM role.
 */
class AWSAuthConfigRole {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAuthConfigRole.attributeTypeMap;
    }
}
exports.AWSAuthConfigRole = AWSAuthConfigRole;
/**
 * @ignore
 */
AWSAuthConfigRole.attributeTypeMap = {
    externalId: {
        baseName: "external_id",
        type: "string",
    },
    roleName: {
        baseName: "role_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAuthConfigRole.js.map