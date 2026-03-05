"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCoreWebVitals = void 0;
/**
 * Core Web Vitals attached to a browser test step.
 */
class SyntheticsCoreWebVitals {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCoreWebVitals.attributeTypeMap;
    }
}
exports.SyntheticsCoreWebVitals = SyntheticsCoreWebVitals;
/**
 * @ignore
 */
SyntheticsCoreWebVitals.attributeTypeMap = {
    cls: {
        baseName: "cls",
        type: "number",
        format: "double",
    },
    lcp: {
        baseName: "lcp",
        type: "number",
        format: "double",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCoreWebVitals.js.map