"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventStep = void 0;
/**
 * Details of a CI step.
 */
class CIAppPipelineEventStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventStep.attributeTypeMap;
    }
}
exports.CIAppPipelineEventStep = CIAppPipelineEventStep;
/**
 * @ignore
 */
CIAppPipelineEventStep.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "Date",
        required: true,
        format: "date-time",
    },
    error: {
        baseName: "error",
        type: "CIAppCIError",
    },
    git: {
        baseName: "git",
        type: "CIAppGitInfo",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    jobId: {
        baseName: "job_id",
        type: "string",
    },
    jobName: {
        baseName: "job_name",
        type: "string",
    },
    level: {
        baseName: "level",
        type: "CIAppPipelineEventStepLevel",
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
    pipelineName: {
        baseName: "pipeline_name",
        type: "string",
        required: true,
    },
    pipelineUniqueId: {
        baseName: "pipeline_unique_id",
        type: "string",
        required: true,
    },
    stageId: {
        baseName: "stage_id",
        type: "string",
    },
    stageName: {
        baseName: "stage_name",
        type: "string",
    },
    start: {
        baseName: "start",
        type: "Date",
        required: true,
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "CIAppPipelineEventStepStatus",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelineEventStep.js.map