"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeatMapWidgetXAxis = void 0;
/**
 * X Axis controls for the heat map widget.
 */
class HeatMapWidgetXAxis {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HeatMapWidgetXAxis.attributeTypeMap;
    }
}
exports.HeatMapWidgetXAxis = HeatMapWidgetXAxis;
/**
 * @ignore
 */
HeatMapWidgetXAxis.attributeTypeMap = {
    numBuckets: {
        baseName: "num_buckets",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HeatMapWidgetXAxis.js.map