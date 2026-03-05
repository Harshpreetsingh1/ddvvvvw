"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestOptionsRetry = void 0;
/**
 * Object describing the retry strategy to apply to a Synthetic test.
 */
class SyntheticsTestOptionsRetry {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestOptionsRetry.attributeTypeMap;
    }
}
exports.SyntheticsTestOptionsRetry = SyntheticsTestOptionsRetry;
/**
 * @ignore
 */
SyntheticsTestOptionsRetry.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestOptionsRetry.js.map