"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSDSHour = void 0;
/**
 * Sensitive Data Scanner usage for a given organization for a given hour.
 */
class UsageSDSHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSDSHour.attributeTypeMap;
    }
}
exports.UsageSDSHour = UsageSDSHour;
/**
 * @ignore
 */
UsageSDSHour.attributeTypeMap = {
    apmScannedBytes: {
        baseName: "apm_scanned_bytes",
        type: "number",
        format: "int64",
    },
    eventsScannedBytes: {
        baseName: "events_scanned_bytes",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    logsScannedBytes: {
        baseName: "logs_scanned_bytes",
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
    rumScannedBytes: {
        baseName: "rum_scanned_bytes",
        type: "number",
        format: "int64",
    },
    totalScannedBytes: {
        baseName: "total_scanned_bytes",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSDSHour.js.map