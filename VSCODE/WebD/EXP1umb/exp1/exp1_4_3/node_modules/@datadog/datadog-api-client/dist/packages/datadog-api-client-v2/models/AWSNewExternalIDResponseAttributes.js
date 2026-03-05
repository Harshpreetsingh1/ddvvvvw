"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNewExternalIDResponseAttributes = void 0;
/**
 * AWS External ID response body.
 */
class AWSNewExternalIDResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNewExternalIDResponseAttributes.attributeTypeMap;
    }
}
exports.AWSNewExternalIDResponseAttributes = AWSNewExternalIDResponseAttributes;
/**
 * @ignore
 */
AWSNewExternalIDResponseAttributes.attributeTypeMap = {
    externalId: {
        baseName: "external_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNewExternalIDResponseAttributes.js.map