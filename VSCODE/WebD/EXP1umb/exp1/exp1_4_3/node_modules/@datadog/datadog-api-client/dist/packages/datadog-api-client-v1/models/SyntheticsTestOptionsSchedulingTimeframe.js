"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestOptionsSchedulingTimeframe = void 0;
/**
 * Object describing a timeframe.
 */
class SyntheticsTestOptionsSchedulingTimeframe {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestOptionsSchedulingTimeframe.attributeTypeMap;
    }
}
exports.SyntheticsTestOptionsSchedulingTimeframe = SyntheticsTestOptionsSchedulingTimeframe;
/**
 * @ignore
 */
SyntheticsTestOptionsSchedulingTimeframe.attributeTypeMap = {
    day: {
        baseName: "day",
        type: "number",
        required: true,
        format: "int32",
    },
    from: {
        baseName: "from",
        type: "string",
        required: true,
    },
    to: {
        baseName: "to",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestOptionsSchedulingTimeframe.js.map