"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventParentPipeline = void 0;
/**
 * If the pipeline is triggered as child of another pipeline, this should contain the details of the parent pipeline.
 */
class CIAppPipelineEventParentPipeline {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventParentPipeline.attributeTypeMap;
    }
}
exports.CIAppPipelineEventParentPipeline = CIAppPipelineEventParentPipeline;
/**
 * @ignore
 */
CIAppPipelineEventParentPipeline.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=CIAppPipelineEventParentPipeline.js.map