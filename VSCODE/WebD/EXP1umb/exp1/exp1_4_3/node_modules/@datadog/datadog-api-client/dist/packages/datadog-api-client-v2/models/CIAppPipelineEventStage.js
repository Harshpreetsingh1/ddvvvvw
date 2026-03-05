"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventStage = void 0;
/**
 * Details of a CI stage.
 */
class CIAppPipelineEventStage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventStage.attributeTypeMap;
    }
}
exports.CIAppPipelineEventStage = CIAppPipelineEventStage;
/**
 * @ignore
 */
CIAppPipelineEventStage.attributeTypeMap = {
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
        type: "CIAppPipelineEventStageLevel",
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
    start: {
        baseName: "start",
        type: "Date",
        required: true,
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "CIAppPipelineEventStageStatus",
        required: true,
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
//# sourceMappingURL=CIAppPipelineEventStage.js.map