"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionWidgetYAxis = void 0;
/**
 * Y Axis controls for the distribution widget.
 */
class DistributionWidgetYAxis {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DistributionWidgetYAxis.attributeTypeMap;
    }
}
exports.DistributionWidgetYAxis = DistributionWidgetYAxis;
/**
 * @ignore
 */
DistributionWidgetYAxis.attributeTypeMap = {
    includeZero: {
        baseName: "include_zero",
        type: "boolean",
    },
    label: {
        baseName: "label",
        type: "string",
    },
    max: {
        baseName: "max",
        type: "string",
    },
    min: {
        baseName: "min",
        type: "string",
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
//# sourceMappingURL=DistributionWidgetYAxis.js.map