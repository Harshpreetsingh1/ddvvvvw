"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAuthConfigKeys = void 0;
/**
 * AWS Authentication config to integrate your account using an access key pair.
 */
class AWSAuthConfigKeys {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAuthConfigKeys.attributeTypeMap;
    }
}
exports.AWSAuthConfigKeys = AWSAuthConfigKeys;
/**
 * @ignore
 */
AWSAuthConfigKeys.attributeTypeMap = {
    accessKeyId: {
        baseName: "access_key_id",
        type: "string",
        required: true,
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
//# sourceMappingURL=AWSAuthConfigKeys.js.map