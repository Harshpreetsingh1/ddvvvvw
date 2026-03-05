"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageAttributionPagination = void 0;
/**
 * The metadata for the current pagination.
 */
class HourlyUsageAttributionPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageAttributionPagination.attributeTypeMap;
    }
}
exports.HourlyUsageAttributionPagination = HourlyUsageAttributionPagination;
/**
 * @ignore
 */
HourlyUsageAttributionPagination.attributeTypeMap = {
    nextRecordId: {
        baseName: "next_record_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageAttributionPagination.js.map