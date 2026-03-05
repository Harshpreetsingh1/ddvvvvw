"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCustomLink = void 0;
/**
 * Custom links help you connect a data value to a URL, like a Datadog page or your AWS console.
 */
class WidgetCustomLink {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetCustomLink.attributeTypeMap;
    }
}
exports.WidgetCustomLink = WidgetCustomLink;
/**
 * @ignore
 */
WidgetCustomLink.attributeTypeMap = {
    isHidden: {
        baseName: "is_hidden",
        type: "boolean",
    },
    label: {
        baseName: "label",
        type: "string",
    },
    link: {
        baseName: "link",
        type: "string",
    },
    overrideLabel: {
        baseName: "override_label",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetCustomLink.js.map