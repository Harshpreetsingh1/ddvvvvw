"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventPreviousPipeline = void 0;
/**
 * If the pipeline is a retry, this should contain the details of the previous attempt.
 */
class CIAppPipelineEventPreviousPipeline {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventPreviousPipeline.attributeTypeMap;
    }
}
exports.CIAppPipelineEventPreviousPipeline = CIAppPipelineEventPreviousPipeline;
/**
 * @ignore
 */
CIAppPipelineEventPreviousPipeline.attributeTypeMap = {
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
//# sourceMappingURL=CIAppPipelineEventPreviousPipeline.js.map