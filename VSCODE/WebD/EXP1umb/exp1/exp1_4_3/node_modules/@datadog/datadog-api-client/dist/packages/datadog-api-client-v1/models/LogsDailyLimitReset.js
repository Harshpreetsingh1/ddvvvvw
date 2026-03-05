"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsDailyLimitReset = void 0;
/**
 * Object containing options to override the default daily limit reset time.
 */
class LogsDailyLimitReset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsDailyLimitReset.attributeTypeMap;
    }
}
exports.LogsDailyLimitReset = LogsDailyLimitReset;
/**
 * @ignore
 */
LogsDailyLimitReset.attributeTypeMap = {
    resetTime: {
        baseName: "reset_time",
        type: "string",
    },
    resetUtcOffset: {
        baseName: "reset_utc_offset",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsDailyLimitReset.js.map