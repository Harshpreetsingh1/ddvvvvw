"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeomapWidgetDefinitionStyle = void 0;
/**
 * The style to apply to the widget.
 */
class GeomapWidgetDefinitionStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeomapWidgetDefinitionStyle.attributeTypeMap;
    }
}
exports.GeomapWidgetDefinitionStyle = GeomapWidgetDefinitionStyle;
/**
 * @ignore
 */
GeomapWidgetDefinitionStyle.attributeTypeMap = {
    palette: {
        baseName: "palette",
        type: "string",
        required: true,
    },
    paletteFlip: {
        baseName: "palette_flip",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeomapWidgetDefinitionStyle.js.map