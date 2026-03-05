"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEvent = void 0;
/**
 * Object description of a pipeline event after being processed and stored by Datadog.
 */
class CIAppPipelineEvent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEvent.attributeTypeMap;
    }
}
exports.CIAppPipelineEvent = CIAppPipelineEvent;
/**
 * @ignore
 */
CIAppPipelineEvent.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CIAppPipelineEventAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CIAppPipelineEventTypeName",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelineEvent.js.map