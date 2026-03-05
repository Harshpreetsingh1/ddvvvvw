"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTemplateVariable = void 0;
/**
 * Template variable.
 */
class DashboardTemplateVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardTemplateVariable.attributeTypeMap;
    }
}
exports.DashboardTemplateVariable = DashboardTemplateVariable;
/**
 * @ignore
 */
DashboardTemplateVariable.attributeTypeMap = {
    availableValues: {
        baseName: "available_values",
        type: "Array<string>",
    },
    _default: {
        baseName: "default",
        type: "string",
    },
    defaults: {
        baseName: "defaults",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    prefix: {
        baseName: "prefix",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardTemplateVariable.js.map