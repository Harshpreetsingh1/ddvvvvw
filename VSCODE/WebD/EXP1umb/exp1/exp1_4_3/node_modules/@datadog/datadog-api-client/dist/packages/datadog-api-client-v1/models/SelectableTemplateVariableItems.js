"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectableTemplateVariableItems = void 0;
/**
 * Object containing the template variable's name, associated tag/attribute, default value and selectable values.
 */
class SelectableTemplateVariableItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SelectableTemplateVariableItems.attributeTypeMap;
    }
}
exports.SelectableTemplateVariableItems = SelectableTemplateVariableItems;
/**
 * @ignore
 */
SelectableTemplateVariableItems.attributeTypeMap = {
    defaultValue: {
        baseName: "default_value",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    prefix: {
        baseName: "prefix",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    visibleTags: {
        baseName: "visible_tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SelectableTemplateVariableItems.js.map