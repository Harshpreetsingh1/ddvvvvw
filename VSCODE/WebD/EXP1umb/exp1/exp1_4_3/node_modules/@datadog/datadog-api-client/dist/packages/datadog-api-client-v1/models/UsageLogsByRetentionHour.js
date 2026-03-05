"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLogsByRetentionHour = void 0;
/**
 * The number of indexed logs for each hour for a given organization broken down by retention period.
 */
class UsageLogsByRetentionHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLogsByRetentionHour.attributeTypeMap;
    }
}
exports.UsageLogsByRetentionHour = UsageLogsByRetentionHour;
/**
 * @ignore
 */
UsageLogsByRetentionHour.attributeTypeMap = {
    indexedEventsCount: {
        baseName: "indexed_events_count",
        type: "number",
        format: "int64",
    },
    liveIndexedEventsCount: {
        baseName: "live_indexed_events_count",
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
    rehydratedIndexedEventsCount: {
        baseName: "rehydrated_indexed_events_count",
        type: "number",
        format: "int64",
    },
    retention: {
        baseName: "retention",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLogsByRetentionHour.js.map