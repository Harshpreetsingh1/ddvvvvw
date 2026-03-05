"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLogsHour = void 0;
/**
 * Hour usage for logs.
 */
class UsageLogsHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLogsHour.attributeTypeMap;
    }
}
exports.UsageLogsHour = UsageLogsHour;
/**
 * @ignore
 */
UsageLogsHour.attributeTypeMap = {
    billableIngestedBytes: {
        baseName: "billable_ingested_bytes",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    indexedEventsCount: {
        baseName: "indexed_events_count",
        type: "number",
        format: "int64",
    },
    ingestedEventsBytes: {
        baseName: "ingested_events_bytes",
        type: "number",
        format: "int64",
    },
    logsForwardingEventsBytes: {
        baseName: "logs_forwarding_events_bytes",
        type: "number",
        format: "int64",
    },
    logsLiveIndexedCount: {
        baseName: "logs_live_indexed_count",
        type: "number",
        format: "int64",
    },
    logsLiveIngestedBytes: {
        baseName: "logs_live_ingested_bytes",
        type: "number",
        format: "int64",
    },
    logsRehydratedIndexedCount: {
        baseName: "logs_rehydrated_indexed_count",
        type: "number",
        format: "int64",
    },
    logsRehydratedIngestedBytes: {
        baseName: "logs_rehydrated_ingested_bytes",
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
//# sourceMappingURL=UsageLogsHour.js.map