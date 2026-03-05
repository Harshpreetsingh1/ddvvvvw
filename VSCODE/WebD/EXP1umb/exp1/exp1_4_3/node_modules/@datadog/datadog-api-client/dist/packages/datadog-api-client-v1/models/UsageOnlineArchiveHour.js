"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageOnlineArchiveHour = void 0;
/**
 * Online Archive usage in a given hour.
 */
class UsageOnlineArchiveHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageOnlineArchiveHour.attributeTypeMap;
    }
}
exports.UsageOnlineArchiveHour = UsageOnlineArchiveHour;
/**
 * @ignore
 */
UsageOnlineArchiveHour.attributeTypeMap = {
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    onlineArchiveEventsCount: {
        baseName: "online_archive_events_count",
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
//# sourceMappingURL=UsageOnlineArchiveHour.js.map