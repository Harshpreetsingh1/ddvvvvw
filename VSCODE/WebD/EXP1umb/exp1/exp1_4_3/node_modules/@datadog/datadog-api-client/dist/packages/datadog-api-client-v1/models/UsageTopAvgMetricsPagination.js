"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTopAvgMetricsPagination = void 0;
/**
 * The metadata for the current pagination.
 */
class UsageTopAvgMetricsPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTopAvgMetricsPagination.attributeTypeMap;
    }
}
exports.UsageTopAvgMetricsPagination = UsageTopAvgMetricsPagination;
/**
 * @ignore
 */
UsageTopAvgMetricsPagination.attributeTypeMap = {
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    nextRecordId: {
        baseName: "next_record_id",
        type: "string",
    },
    totalNumberOfRecords: {
        baseName: "total_number_of_records",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageTopAvgMetricsPagination.js.map