"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountUpdateRequestAttributes = void 0;
/**
 * Attributes object for updating a Confluent account.
 */
class ConfluentAccountUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.ConfluentAccountUpdateRequestAttributes = ConfluentAccountUpdateRequestAttributes;
/**
 * @ignore
 */
ConfluentAccountUpdateRequestAttributes.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    apiSecret: {
        baseName: "api_secret",
        type: "string",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountUpdateRequestAttributes.js.map