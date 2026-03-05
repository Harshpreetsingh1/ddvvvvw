"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationDisplay = void 0;
/**
 * The definition of `AnnotationDisplay` object.
 */
class AnnotationDisplay {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AnnotationDisplay.attributeTypeMap;
    }
}
exports.AnnotationDisplay = AnnotationDisplay;
/**
 * @ignore
 */
AnnotationDisplay.attributeTypeMap = {
    bounds: {
        baseName: "bounds",
        type: "AnnotationDisplayBounds",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AnnotationDisplay.js.map