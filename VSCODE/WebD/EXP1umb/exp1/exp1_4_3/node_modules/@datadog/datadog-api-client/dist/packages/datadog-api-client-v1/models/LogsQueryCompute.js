"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsQueryCompute = void 0;
/**
 * Define computation for a log query.
 */
class LogsQueryCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsQueryCompute.attributeTypeMap;
    }
}
exports.LogsQueryCompute = LogsQueryCompute;
/**
 * @ignore
 */
LogsQueryCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "string",
        required: true,
    },
    facet: {
        baseName: "facet",
        type: "string",
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsQueryCompute.js.map