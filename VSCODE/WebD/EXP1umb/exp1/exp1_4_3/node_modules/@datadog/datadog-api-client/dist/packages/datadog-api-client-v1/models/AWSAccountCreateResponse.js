"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountCreateResponse = void 0;
/**
 * The Response returned by the AWS Create Account call.
 */
class AWSAccountCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountCreateResponse.attributeTypeMap;
    }
}
exports.AWSAccountCreateResponse = AWSAccountCreateResponse;
/**
 * @ignore
 */
AWSAccountCreateResponse.attributeTypeMap = {
    externalId: {
        baseName: "external_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountCreateResponse.js.map