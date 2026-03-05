"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetLayout = void 0;
/**
 * The layout for a widget on a `free` or **new dashboard layout** dashboard.
 */
class WidgetLayout {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetLayout.attributeTypeMap;
    }
}
exports.WidgetLayout = WidgetLayout;
/**
 * @ignore
 */
WidgetLayout.attributeTypeMap = {
    height: {
        baseName: "height",
        type: "number",
        required: true,
        format: "int64",
    },
    isColumnBreak: {
        baseName: "is_column_break",
        type: "boolean",
    },
    width: {
        baseName: "width",
        type: "number",
        required: true,
        format: "int64",
    },
    x: {
        baseName: "x",
        type: "number",
        required: true,
        format: "int64",
    },
    y: {
        baseName: "y",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetLayout.js.map