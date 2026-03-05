"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppCreatePipelineEventRequestAttributes = void 0;
/**
 * Attributes of the pipeline event to create.
 */
class CIAppCreatePipelineEventRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppCreatePipelineEventRequestAttributes.attributeTypeMap;
    }
}
exports.CIAppCreatePipelineEventRequestAttributes = CIAppCreatePipelineEventRequestAttributes;
/**
 * @ignore
 */
CIAppCreatePipelineEventRequestAttributes.attributeTypeMap = {
    env: {
        baseName: "env",
        type: "string",
    },
    providerName: {
        baseName: "provider_name",
        type: "string",
    },
    resource: {
        baseName: "resource",
        type: "CIAppCreatePipelineEventRequestAttributesResource",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppCreatePipelineEventRequestAttributes.js.map