"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIndexedSpansHour = void 0;
/**
 * The hours of indexed spans usage.
 */
class UsageIndexedSpansHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIndexedSpansHour.attributeTypeMap;
    }
}
exports.UsageIndexedSpansHour = UsageIndexedSpansHour;
/**
 * @ignore
 */
UsageIndexedSpansHour.attributeTypeMap = {
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
//# sourceMappingURL=UsageIndexedSpansHour.js.map