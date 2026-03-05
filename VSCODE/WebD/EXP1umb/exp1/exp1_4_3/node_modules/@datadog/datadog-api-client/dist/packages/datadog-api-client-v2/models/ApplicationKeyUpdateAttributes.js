"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyUpdateAttributes = void 0;
/**
 * Attributes used to update an application Key.
 */
class ApplicationKeyUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyUpdateAttributes.attributeTypeMap;
    }
}
exports.ApplicationKeyUpdateAttributes = ApplicationKeyUpdateAttributes;
/**
 * @ignore
 */
ApplicationKeyUpdateAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
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
//# sourceMappingURL=ApplicationKeyUpdateAttributes.js.map