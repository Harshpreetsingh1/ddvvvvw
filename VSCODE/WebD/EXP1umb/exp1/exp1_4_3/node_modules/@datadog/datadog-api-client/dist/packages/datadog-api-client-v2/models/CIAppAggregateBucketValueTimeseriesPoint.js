"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppAggregateBucketValueTimeseriesPoint = void 0;
/**
 * A timeseries point.
 */
class CIAppAggregateBucketValueTimeseriesPoint {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppAggregateBucketValueTimeseriesPoint.attributeTypeMap;
    }
}
exports.CIAppAggregateBucketValueTimeseriesPoint = CIAppAggregateBucketValueTimeseriesPoint;
/**
 * @ignore
 */
CIAppAggregateBucketValueTimeseriesPoint.attributeTypeMap = {
    time: {
        baseName: "time",
        type: "Date",
        format: "date-time",
    },
    value: {
        baseName: "value",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppAggregateBucketValueTimeseriesPoint.js.map