"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeomapWidgetRequestStyle = void 0;
/**
 * The style to apply to the request for points layer.
 */
class GeomapWidgetRequestStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeomapWidgetRequestStyle.attributeTypeMap;
    }
}
exports.GeomapWidgetRequestStyle = GeomapWidgetRequestStyle;
/**
 * @ignore
 */
GeomapWidgetRequestStyle.attributeTypeMap = {
    colorBy: {
        baseName: "color_by",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeomapWidgetRequestStyle.js.map