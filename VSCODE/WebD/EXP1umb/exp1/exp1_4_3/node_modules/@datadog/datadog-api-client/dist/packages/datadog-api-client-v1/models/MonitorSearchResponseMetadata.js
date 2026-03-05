"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSearchResponseMetadata = void 0;
/**
 * Metadata about the response.
 */
class MonitorSearchResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSearchResponseMetadata.attributeTypeMap;
    }
}
exports.MonitorSearchResponseMetadata = MonitorSearchResponseMetadata;
/**
 * @ignore
 */
MonitorSearchResponseMetadata.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "number",
        format: "int64",
    },
    pageCount: {
        baseName: "page_count",
        type: "number",
        format: "int64",
    },
    perPage: {
        baseName: "per_page",
        type: "number",
        format: "int64",
    },
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSearchResponseMetadata.js.map