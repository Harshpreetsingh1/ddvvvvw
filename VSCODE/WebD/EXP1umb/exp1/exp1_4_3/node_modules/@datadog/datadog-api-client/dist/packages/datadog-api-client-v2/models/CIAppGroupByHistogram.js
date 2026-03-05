"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppGroupByHistogram = void 0;
/**
 * Used to perform a histogram computation (only for measure facets).
 * At most, 100 buckets are allowed, the number of buckets is `(max - min)/interval`.
 */
class CIAppGroupByHistogram {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppGroupByHistogram.attributeTypeMap;
    }
}
exports.CIAppGroupByHistogram = CIAppGroupByHistogram;
/**
 * @ignore
 */
CIAppGroupByHistogram.attributeTypeMap = {
    interval: {
        baseName: "interval",
        type: "number",
        required: true,
        format: "double",
    },
    max: {
        baseName: "max",
        type: "number",
        required: true,
        format: "double",
    },
    min: {
        baseName: "min",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppGroupByHistogram.js.map