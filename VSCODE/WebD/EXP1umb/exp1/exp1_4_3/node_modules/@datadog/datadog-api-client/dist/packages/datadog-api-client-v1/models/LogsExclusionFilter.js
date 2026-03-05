"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsExclusionFilter = void 0;
/**
 * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
 */
class LogsExclusionFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsExclusionFilter.attributeTypeMap;
    }
}
exports.LogsExclusionFilter = LogsExclusionFilter;
/**
 * @ignore
 */
LogsExclusionFilter.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    sampleRate: {
        baseName: "sample_rate",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsExclusionFilter.js.map