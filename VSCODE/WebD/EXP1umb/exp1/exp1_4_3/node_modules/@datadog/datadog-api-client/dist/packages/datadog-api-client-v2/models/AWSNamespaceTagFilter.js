"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNamespaceTagFilter = void 0;
/**
 * AWS Metrics Collection tag filters list. Defaults to `[]`.
 * The array of custom AWS resource tags (in the form `key:value`) defines a filter that Datadog uses
 * when collecting metrics from a specified service.
 * Wildcards, such as `?` (match a single character) and `*` (match multiple characters),
 * and exclusion using `!` before the tag are supported.
 * For EC2, only hosts that match one of the defined tags are imported into Datadog.
 * The rest are ignored. For example, `env:production,instance-type:c?.*,!region:us-east-1`.
 */
class AWSNamespaceTagFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNamespaceTagFilter.attributeTypeMap;
    }
}
exports.AWSNamespaceTagFilter = AWSNamespaceTagFilter;
/**
 * @ignore
 */
AWSNamespaceTagFilter.attributeTypeMap = {
    namespace: {
        baseName: "namespace",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNamespaceTagFilter.js.map