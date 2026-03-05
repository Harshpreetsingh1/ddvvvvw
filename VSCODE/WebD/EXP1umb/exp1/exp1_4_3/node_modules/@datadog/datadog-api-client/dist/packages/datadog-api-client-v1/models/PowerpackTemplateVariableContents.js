"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackTemplateVariableContents = void 0;
/**
 * Powerpack template variable contents.
 */
class PowerpackTemplateVariableContents {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackTemplateVariableContents.attributeTypeMap;
    }
}
exports.PowerpackTemplateVariableContents = PowerpackTemplateVariableContents;
/**
 * @ignore
 */
PowerpackTemplateVariableContents.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    prefix: {
        baseName: "prefix",
        type: "string",
    },
    values: {
        baseName: "values",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackTemplateVariableContents.js.map