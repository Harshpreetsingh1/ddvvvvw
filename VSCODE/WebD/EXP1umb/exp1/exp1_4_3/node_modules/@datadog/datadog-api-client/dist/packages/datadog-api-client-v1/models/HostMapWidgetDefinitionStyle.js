"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMapWidgetDefinitionStyle = void 0;
/**
 * The style to apply to the widget.
 */
class HostMapWidgetDefinitionStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMapWidgetDefinitionStyle.attributeTypeMap;
    }
}
exports.HostMapWidgetDefinitionStyle = HostMapWidgetDefinitionStyle;
/**
 * @ignore
 */
HostMapWidgetDefinitionStyle.attributeTypeMap = {
    fillMax: {
        baseName: "fill_max",
        type: "string",
    },
    fillMin: {
        baseName: "fill_min",
        type: "string",
    },
    palette: {
        baseName: "palette",
        type: "string",
    },
    paletteFlip: {
        baseName: "palette_flip",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMapWidgetDefinitionStyle.js.map