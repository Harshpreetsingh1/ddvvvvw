"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIngestedSpansHour = void 0;
/**
 * Ingested spans usage for a given organization for a given hour.
 */
class UsageIngestedSpansHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIngestedSpansHour.attributeTypeMap;
    }
}
exports.UsageIngestedSpansHour = UsageIngestedSpansHour;
/**
 * @ignore
 */
UsageIngestedSpansHour.attributeTypeMap = {
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    ingestedEventsBytes: {
        baseName: "ingested_events_bytes",
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
//# sourceMappingURL=UsageIngestedSpansHour.js.map