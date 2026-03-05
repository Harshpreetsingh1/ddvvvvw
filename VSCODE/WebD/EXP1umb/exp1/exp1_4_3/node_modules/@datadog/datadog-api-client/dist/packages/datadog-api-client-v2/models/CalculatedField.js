"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatedField = void 0;
/**
 * Calculated field.
 */
class CalculatedField {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CalculatedField.attributeTypeMap;
    }
}
exports.CalculatedField = CalculatedField;
/**
 * @ignore
 */
CalculatedField.attributeTypeMap = {
    expression: {
        baseName: "expression",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CalculatedField.js.map