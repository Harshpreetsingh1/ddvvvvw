"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricMetadata = void 0;
/**
 * Object with all metric related metadata.
 */
class MetricMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricMetadata.attributeTypeMap;
    }
}
exports.MetricMetadata = MetricMetadata;
/**
 * @ignore
 */
MetricMetadata.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    integration: {
        baseName: "integration",
        type: "string",
    },
    perUnit: {
        baseName: "per_unit",
        type: "string",
    },
    shortName: {
        baseName: "short_name",
        type: "string",
    },
    statsdInterval: {
        baseName: "statsd_interval",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    unit: {
        baseName: "unit",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricMetadata.js.map