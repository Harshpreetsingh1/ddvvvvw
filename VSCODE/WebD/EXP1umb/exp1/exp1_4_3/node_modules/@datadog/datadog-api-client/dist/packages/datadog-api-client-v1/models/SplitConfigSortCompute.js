"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitConfigSortCompute = void 0;
/**
 * Defines the metric and aggregation used as the sort value.
 */
class SplitConfigSortCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitConfigSortCompute.attributeTypeMap;
    }
}
exports.SplitConfigSortCompute = SplitConfigSortCompute;
/**
 * @ignore
 */
SplitConfigSortCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "string",
        required: true,
    },
    metric: {
        baseName: "metric",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitConfigSortCompute.js.map