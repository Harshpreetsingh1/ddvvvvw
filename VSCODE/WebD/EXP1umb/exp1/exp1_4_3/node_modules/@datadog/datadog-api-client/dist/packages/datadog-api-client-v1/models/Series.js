"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
/**
 * A metric to submit to Datadog.
 * See [Datadog metrics](https://docs.datadoghq.com/developers/metrics/#custom-metrics-properties).
 */
class Series {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Series.attributeTypeMap;
    }
}
exports.Series = Series;
/**
 * @ignore
 */
Series.attributeTypeMap = {
    host: {
        baseName: "host",
        type: "string",
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
        required: true,
    },
    points: {
        baseName: "points",
        type: "Array<[number, number]>",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
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
//# sourceMappingURL=Series.js.map