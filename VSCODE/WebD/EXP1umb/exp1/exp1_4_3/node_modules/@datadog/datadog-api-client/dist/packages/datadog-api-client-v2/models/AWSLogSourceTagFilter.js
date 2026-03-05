"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogSourceTagFilter = void 0;
/**
 * AWS log source tag filter list. Defaults to `[]`.
 * Array of log source to AWS resource tag mappings. Each mapping contains a log source and its
 * associated AWS resource tags (in `key:value` format) used to filter logs submitted to Datadog.
 * Tag filters are applied for tags on the AWS resource emitting logs; tags associated with the
 * log storage entity (such as a CloudWatch Log Group or S3 Bucket) are not considered.
 * For more information on resource tag filter syntax,
 * [see AWS resource exclusion](https://docs.datadoghq.com/account_management/billing/aws/#aws-resource-exclusion)
 * in the AWS integration billing page.
 */
class AWSLogSourceTagFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogSourceTagFilter.attributeTypeMap;
    }
}
exports.AWSLogSourceTagFilter = AWSLogSourceTagFilter;
/**
 * @ignore
 */
AWSLogSourceTagFilter.attributeTypeMap = {
    source: {
        baseName: "source",
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
//# sourceMappingURL=AWSLogSourceTagFilter.js.map