"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppCreatePipelineEventRequestData = void 0;
/**
 * Data of the pipeline event to create.
 */
class CIAppCreatePipelineEventRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppCreatePipelineEventRequestData.attributeTypeMap;
    }
}
exports.CIAppCreatePipelineEventRequestData = CIAppCreatePipelineEventRequestData;
/**
 * @ignore
 */
CIAppCreatePipelineEventRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CIAppCreatePipelineEventRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "CIAppCreatePipelineEventRequestDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppCreatePipelineEventRequestData.js.map