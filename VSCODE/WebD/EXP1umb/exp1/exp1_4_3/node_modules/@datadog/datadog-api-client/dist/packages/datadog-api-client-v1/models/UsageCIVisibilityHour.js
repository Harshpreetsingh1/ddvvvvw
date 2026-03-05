"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCIVisibilityHour = void 0;
/**
 * CI visibility usage in a given hour.
 */
class UsageCIVisibilityHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCIVisibilityHour.attributeTypeMap;
    }
}
exports.UsageCIVisibilityHour = UsageCIVisibilityHour;
/**
 * @ignore
 */
UsageCIVisibilityHour.attributeTypeMap = {
    ciPipelineIndexedSpans: {
        baseName: "ci_pipeline_indexed_spans",
        type: "number",
        format: "int64",
    },
    ciTestIndexedSpans: {
        baseName: "ci_test_indexed_spans",
        type: "number",
        format: "int64",
    },
    ciVisibilityItrCommitters: {
        baseName: "ci_visibility_itr_committers",
        type: "number",
        format: "int64",
    },
    ciVisibilityPipelineCommitters: {
        baseName: "ci_visibility_pipeline_committers",
        type: "number",
        format: "int64",
    },
    ciVisibilityTestCommitters: {
        baseName: "ci_visibility_test_committers",
        type: "number",
        format: "int64",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCIVisibilityHour.js.map