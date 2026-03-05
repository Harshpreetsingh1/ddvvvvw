"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationDisplayBounds = void 0;
/**
 * The definition of `AnnotationDisplayBounds` object.
 */
class AnnotationDisplayBounds {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AnnotationDisplayBounds.attributeTypeMap;
    }
}
exports.AnnotationDisplayBounds = AnnotationDisplayBounds;
/**
 * @ignore
 */
AnnotationDisplayBounds.attributeTypeMap = {
    height: {
        baseName: "height",
        type: "number",
        format: "double",
    },
    width: {
        baseName: "width",
        type: "number",
        format: "double",
    },
    x: {
        baseName: "x",
        type: "number",
        format: "double",
    },
    y: {
        baseName: "y",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AnnotationDisplayBounds.js.map