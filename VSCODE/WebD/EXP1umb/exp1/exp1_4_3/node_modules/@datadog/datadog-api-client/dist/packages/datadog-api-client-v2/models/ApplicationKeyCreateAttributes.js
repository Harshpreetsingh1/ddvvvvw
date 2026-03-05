"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyCreateAttributes = void 0;
/**
 * Attributes used to create an application Key.
 */
class ApplicationKeyCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyCreateAttributes.attributeTypeMap;
    }
}
exports.ApplicationKeyCreateAttributes = ApplicationKeyCreateAttributes;
/**
 * @ignore
 */
ApplicationKeyCreateAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    scopes: {
        baseName: "scopes",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyCreateAttributes.js.map