"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppCreatePipelineEventRequest = void 0;
/**
 * Request object.
 */
class CIAppCreatePipelineEventRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppCreatePipelineEventRequest.attributeTypeMap;
    }
}
exports.CIAppCreatePipelineEventRequest = CIAppCreatePipelineEventRequest;
/**
 * @ignore
 */
CIAppCreatePipelineEventRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CIAppCreatePipelineEventRequestDataSingleOrArray",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppCreatePipelineEventRequest.js.map