"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLogsByIndexHour = void 0;
/**
 * Number of indexed logs for each hour and index for a given organization.
 */
class UsageLogsByIndexHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLogsByIndexHour.attributeTypeMap;
    }
}
exports.UsageLogsByIndexHour = UsageLogsByIndexHour;
/**
 * @ignore
 */
UsageLogsByIndexHour.attributeTypeMap = {
    eventCount: {
        baseName: "event_count",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    indexId: {
        baseName: "index_id",
        type: "string",
    },
    indexName: {
        baseName: "index_name",
        type: "string",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    retention: {
        baseName: "retention",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLogsByIndexHour.js.map