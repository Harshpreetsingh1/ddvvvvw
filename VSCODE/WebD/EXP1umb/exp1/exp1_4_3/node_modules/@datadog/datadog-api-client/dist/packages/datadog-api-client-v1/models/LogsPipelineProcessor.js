"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsPipelineProcessor = void 0;
/**
 * Nested Pipelines are pipelines within a pipeline. Use Nested Pipelines to split the processing into two steps.
 * For example, first use a high-level filtering such as team and then a second level of filtering based on the
 * integration, service, or any other tag or attribute.
 *
 * A pipeline can contain Nested Pipelines and Processors whereas a Nested Pipeline can only contain Processors.
 */
class LogsPipelineProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsPipelineProcessor.attributeTypeMap;
    }
}
exports.LogsPipelineProcessor = LogsPipelineProcessor;
/**
 * @ignore
 */
LogsPipelineProcessor.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "LogsFilter",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    processors: {
        baseName: "processors",
        type: "Array<LogsProcessor>",
    },
    type: {
        baseName: "type",
        type: "LogsPipelineProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsPipelineProcessor.js.map