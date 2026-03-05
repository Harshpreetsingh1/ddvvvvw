"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTimeseriesHour = void 0;
/**
 * The hourly usage of timeseries.
 */
class UsageTimeseriesHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTimeseriesHour.attributeTypeMap;
    }
}
exports.UsageTimeseriesHour = UsageTimeseriesHour;
/**
 * @ignore
 */
UsageTimeseriesHour.attributeTypeMap = {
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    numCustomInputTimeseries: {
        baseName: "num_custom_input_timeseries",
        type: "number",
        format: "int64",
    },
    numCustomOutputTimeseries: {
        baseName: "num_custom_output_timeseries",
        type: "number",
        format: "int64",
    },
    numCustomTimeseries: {
        baseName: "num_custom_timeseries",
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
//# sourceMappingURL=UsageTimeseriesHour.js.map