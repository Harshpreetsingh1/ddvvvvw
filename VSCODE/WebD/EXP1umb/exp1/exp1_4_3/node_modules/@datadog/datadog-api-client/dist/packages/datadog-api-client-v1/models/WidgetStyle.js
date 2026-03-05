"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetStyle = void 0;
/**
 * Widget style definition.
 */
class WidgetStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetStyle.attributeTypeMap;
    }
}
exports.WidgetStyle = WidgetStyle;
/**
 * @ignore
 */
WidgetStyle.attributeTypeMap = {
    palette: {
        baseName: "palette",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetStyle.js.map