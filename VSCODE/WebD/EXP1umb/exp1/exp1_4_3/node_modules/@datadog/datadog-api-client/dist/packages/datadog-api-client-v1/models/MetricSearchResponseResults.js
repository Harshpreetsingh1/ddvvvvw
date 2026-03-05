"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSearchResponseResults = void 0;
/**
 * Search result.
 */
class MetricSearchResponseResults {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSearchResponseResults.attributeTypeMap;
    }
}
exports.MetricSearchResponseResults = MetricSearchResponseResults;
/**
 * @ignore
 */
MetricSearchResponseResults.attributeTypeMap = {
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSearchResponseResults.js.map