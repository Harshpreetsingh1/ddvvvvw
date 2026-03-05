"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTemplateVariablePresetValue = void 0;
/**
 * Template variables saved views.
 */
class DashboardTemplateVariablePresetValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardTemplateVariablePresetValue.attributeTypeMap;
    }
}
exports.DashboardTemplateVariablePresetValue = DashboardTemplateVariablePresetValue;
/**
 * @ignore
 */
DashboardTemplateVariablePresetValue.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "string",
    },
    values: {
        baseName: "values",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardTemplateVariablePresetValue.js.map