"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSMAgentsMetadata = void 0;
/**
 * Metadata related to the paginated response.
 */
class CSMAgentsMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CSMAgentsMetadata.attributeTypeMap;
    }
}
exports.CSMAgentsMetadata = CSMAgentsMetadata;
/**
 * @ignore
 */
CSMAgentsMetadata.attributeTypeMap = {
    pageIndex: {
        baseName: "page_index",
        type: "number",
        format: "int64",
    },
    pageSize: {
        baseName: "page_size",
        type: "number",
        format: "int64",
    },
    totalFiltered: {
        baseName: "total_filtered",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CSMAgentsMetadata.js.map