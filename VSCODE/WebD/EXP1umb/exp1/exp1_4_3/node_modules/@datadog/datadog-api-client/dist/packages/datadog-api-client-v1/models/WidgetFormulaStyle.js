"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFormulaStyle = void 0;
/**
 * Styling options for widget formulas.
 */
class WidgetFormulaStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetFormulaStyle.attributeTypeMap;
    }
}
exports.WidgetFormulaStyle = WidgetFormulaStyle;
/**
 * @ignore
 */
WidgetFormulaStyle.attributeTypeMap = {
    palette: {
        baseName: "palette",
        type: "string",
    },
    paletteIndex: {
        baseName: "palette_index",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetFormulaStyle.js.map