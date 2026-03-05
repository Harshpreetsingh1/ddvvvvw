"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventJob = void 0;
/**
 * Details of a CI job.
 */
class CIAppPipelineEventJob {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventJob.attributeTypeMap;
    }
}
exports.CIAppPipelineEventJob = CIAppPipelineEventJob;
/**
 * @ignore
 */
CIAppPipelineEventJob.attributeTypeMap = {
    dependencies: {
        baseName: "dependencies",
        type: "Array<string>",
    },
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
    level: {
        baseName: "level",
        type: "CIAppPipelineEventJobLevel",
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
    queueTime: {
        baseName: "queue_time",
        type: "number",
        format: "int64",
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
        type: "CIAppPipelineEventJobStatus",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
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
//# sourceMappingURL=CIAppPipelineEventJob.js.map