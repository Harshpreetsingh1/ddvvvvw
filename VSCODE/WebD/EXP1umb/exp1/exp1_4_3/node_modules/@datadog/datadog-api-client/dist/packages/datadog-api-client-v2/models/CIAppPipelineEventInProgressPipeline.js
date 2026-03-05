"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventInProgressPipeline = void 0;
/**
 * Details of a running pipeline.
 */
class CIAppPipelineEventInProgressPipeline {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventInProgressPipeline.attributeTypeMap;
    }
}
exports.CIAppPipelineEventInProgressPipeline = CIAppPipelineEventInProgressPipeline;
/**
 * @ignore
 */
CIAppPipelineEventInProgressPipeline.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "CIAppCIError",
    },
    git: {
        baseName: "git",
        type: "CIAppGitInfo",
    },
    isManual: {
        baseName: "is_manual",
        type: "boolean",
    },
    isResumed: {
        baseName: "is_resumed",
        type: "boolean",
    },
    level: {
        baseName: "level",
        type: "CIAppPipelineEventPipelineLevel",
        required: true,
    },
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    node: {
        baseName: "node",
        type: "CIAppHostInfo",
    },
    parameters: {
        baseName: "parameters",
        type: "{ [key: string]: string; }",
    },
    parentPipeline: {
        baseName: "parent_pipeline",
        type: "CIAppPipelineEventParentPipeline",
    },
    partialRetry: {
        baseName: "partial_retry",
        type: "boolean",
        required: true,
    },
    pipelineId: {
        baseName: "pipeline_id",
        type: "string",
    },
    previousAttempt: {
        baseName: "previous_attempt",
        type: "CIAppPipelineEventPreviousPipeline",
    },
    queueTime: {
        baseName: "queue_time",
        type: "number",
        format: "int64",
    },
    start: {
        baseName: "start",
        type: "Date",
        required: true,
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "CIAppPipelineEventPipelineInProgressStatus",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    uniqueId: {
        baseName: "unique_id",
        type: "string",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelineEventInProgressPipeline.js.map