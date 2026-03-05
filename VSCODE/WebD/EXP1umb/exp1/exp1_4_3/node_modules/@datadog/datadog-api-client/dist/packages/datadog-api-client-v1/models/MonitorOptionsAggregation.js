"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorOptionsAggregation = void 0;
/**
 * Type of aggregation performed in the monitor query.
 */
class MonitorOptionsAggregation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorOptionsAggregation.attributeTypeMap;
    }
}
exports.MonitorOptionsAggregation = MonitorOptionsAggregation;
/**
 * @ignore
 */
MonitorOptionsAggregation.attributeTypeMap = {
    groupBy: {
        baseName: "group_by",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorOptionsAggregation.js.map