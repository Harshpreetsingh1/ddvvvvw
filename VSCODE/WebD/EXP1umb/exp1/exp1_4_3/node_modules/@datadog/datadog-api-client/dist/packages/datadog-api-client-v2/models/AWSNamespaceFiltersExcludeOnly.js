"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNamespaceFiltersExcludeOnly = void 0;
/**
 * Exclude only these namespaces from metrics collection.
 * Defaults to `["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]`.
 * `AWS/SQS`, `AWS/ElasticMapReduce`, and `AWS/Usage` are excluded by default
 * to reduce your AWS CloudWatch costs from `GetMetricData` API calls.
 */
class AWSNamespaceFiltersExcludeOnly {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNamespaceFiltersExcludeOnly.attributeTypeMap;
    }
}
exports.AWSNamespaceFiltersExcludeOnly = AWSNamespaceFiltersExcludeOnly;
/**
 * @ignore
 */
AWSNamespaceFiltersExcludeOnly.attributeTypeMap = {
    excludeOnly: {
        baseName: "exclude_only",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNamespaceFiltersExcludeOnly.js.map