"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annotation = void 0;
/**
 * A list of annotations used in the workflow. These are like sticky notes for your workflow!
 */
class Annotation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Annotation.attributeTypeMap;
    }
}
exports.Annotation = Annotation;
/**
 * @ignore
 */
Annotation.attributeTypeMap = {
    display: {
        baseName: "display",
        type: "AnnotationDisplay",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    markdownTextAnnotation: {
        baseName: "markdownTextAnnotation",
        type: "AnnotationMarkdownTextAnnotation",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Annotation.js.map