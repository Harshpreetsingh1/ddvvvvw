"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeomapWidgetDefinitionView = void 0;
/**
 * The view of the world that the map should render.
 */
class GeomapWidgetDefinitionView {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeomapWidgetDefinitionView.attributeTypeMap;
    }
}
exports.GeomapWidgetDefinitionView = GeomapWidgetDefinitionView;
/**
 * @ignore
 */
GeomapWidgetDefinitionView.attributeTypeMap = {
    focus: {
        baseName: "focus",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeomapWidgetDefinitionView.js.map