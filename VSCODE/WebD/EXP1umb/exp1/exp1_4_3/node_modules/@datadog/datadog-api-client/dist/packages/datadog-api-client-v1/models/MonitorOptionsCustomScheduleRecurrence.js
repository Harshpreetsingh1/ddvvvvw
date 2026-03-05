"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorOptionsCustomScheduleRecurrence = void 0;
/**
 * Configuration for a recurrence set on the monitor options for custom schedule.
 */
class MonitorOptionsCustomScheduleRecurrence {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorOptionsCustomScheduleRecurrence.attributeTypeMap;
    }
}
exports.MonitorOptionsCustomScheduleRecurrence = MonitorOptionsCustomScheduleRecurrence;
/**
 * @ignore
 */
MonitorOptionsCustomScheduleRecurrence.attributeTypeMap = {
    rrule: {
        baseName: "rrule",
        type: "string",
    },
    start: {
        baseName: "start",
        type: "string",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorOptionsCustomScheduleRecurrence.js.map