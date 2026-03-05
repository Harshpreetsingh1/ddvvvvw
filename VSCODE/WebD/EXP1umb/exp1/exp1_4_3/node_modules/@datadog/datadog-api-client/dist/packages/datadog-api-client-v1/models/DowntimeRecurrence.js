"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeRecurrence = void 0;
/**
 * An object defining the recurrence of the downtime.
 */
class DowntimeRecurrence {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeRecurrence.attributeTypeMap;
    }
}
exports.DowntimeRecurrence = DowntimeRecurrence;
/**
 * @ignore
 */
DowntimeRecurrence.attributeTypeMap = {
    period: {
        baseName: "period",
        type: "number",
        format: "int32",
    },
    rrule: {
        baseName: "rrule",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    untilDate: {
        baseName: "until_date",
        type: "number",
        format: "int64",
    },
    untilOccurrences: {
        baseName: "until_occurrences",
        type: "number",
        format: "int32",
    },
    weekDays: {
        baseName: "week_days",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeRecurrence.js.map