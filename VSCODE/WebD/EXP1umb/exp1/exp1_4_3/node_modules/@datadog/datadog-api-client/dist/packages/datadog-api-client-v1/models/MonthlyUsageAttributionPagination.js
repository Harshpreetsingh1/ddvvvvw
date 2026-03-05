"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyUsageAttributionPagination = void 0;
/**
 * The metadata for the current pagination.
 */
class MonthlyUsageAttributionPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyUsageAttributionPagination.attributeTypeMap;
    }
}
exports.MonthlyUsageAttributionPagination = MonthlyUsageAttributionPagination;
/**
 * @ignore
 */
MonthlyUsageAttributionPagination.attributeTypeMap = {
    nextRecordId: {
        baseName: "next_record_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyUsageAttributionPagination.js.map