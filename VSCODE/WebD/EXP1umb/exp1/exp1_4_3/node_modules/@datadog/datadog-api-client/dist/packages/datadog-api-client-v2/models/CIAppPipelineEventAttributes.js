"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventAttributes = void 0;
/**
 * JSON object containing all event attributes and their associated values.
 */
class CIAppPipelineEventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventAttributes.attributeTypeMap;
    }
}
exports.CIAppPipelineEventAttributes = CIAppPipelineEventAttributes;
/**
 * @ignore
 */
CIAppPipelineEventAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: any; }",
    },
    ciLevel: {
        baseName: "ci_level",
        type: "CIAppPipelineLevel",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelineEventAttributes.js.map