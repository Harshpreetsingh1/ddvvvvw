"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionWidgetXAxis = void 0;
/**
 * X Axis controls for the distribution widget.
 */
class DistributionWidgetXAxis {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DistributionWidgetXAxis.attributeTypeMap;
    }
}
exports.DistributionWidgetXAxis = DistributionWidgetXAxis;
/**
 * @ignore
 */
DistributionWidgetXAxis.attributeTypeMap = {
    includeZero: {
        baseName: "include_zero",
        type: "boolean",
    },
    max: {
        baseName: "max",
        type: "string",
    },
    min: {
        baseName: "min",
        type: "string",
    },
    numBuckets: {
        baseName: "num_buckets",
        type: "number",
        format: "int64",
    },
    scale: {
        baseName: "scale",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DistributionWidgetXAxis.js.map