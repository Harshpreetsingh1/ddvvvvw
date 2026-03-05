"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetMarker = void 0;
/**
 * Markers allow you to add visual conditional formatting for your graphs.
 */
class WidgetMarker {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetMarker.attributeTypeMap;
    }
}
exports.WidgetMarker = WidgetMarker;
/**
 * @ignore
 */
WidgetMarker.attributeTypeMap = {
    displayType: {
        baseName: "display_type",
        type: "string",
    },
    label: {
        baseName: "label",
        type: "string",
    },
    time: {
        baseName: "time",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetMarker.js.map