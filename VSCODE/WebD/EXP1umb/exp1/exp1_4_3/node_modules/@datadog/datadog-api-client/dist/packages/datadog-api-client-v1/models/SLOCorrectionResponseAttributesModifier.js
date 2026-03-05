"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionResponseAttributesModifier = void 0;
/**
 * Modifier of the object.
 */
class SLOCorrectionResponseAttributesModifier {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionResponseAttributesModifier.attributeTypeMap;
    }
}
exports.SLOCorrectionResponseAttributesModifier = SLOCorrectionResponseAttributesModifier;
/**
 * @ignore
 */
SLOCorrectionResponseAttributesModifier.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionResponseAttributesModifier.js.map