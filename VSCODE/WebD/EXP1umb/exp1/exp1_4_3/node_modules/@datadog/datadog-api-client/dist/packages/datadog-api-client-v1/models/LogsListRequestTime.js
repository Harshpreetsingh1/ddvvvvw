"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsListRequestTime = void 0;
/**
 * Timeframe to retrieve the log from.
 */
class LogsListRequestTime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsListRequestTime.attributeTypeMap;
    }
}
exports.LogsListRequestTime = LogsListRequestTime;
/**
 * @ignore
 */
LogsListRequestTime.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "Date",
        required: true,
        format: "date-time",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    to: {
        baseName: "to",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsListRequestTime.js.map