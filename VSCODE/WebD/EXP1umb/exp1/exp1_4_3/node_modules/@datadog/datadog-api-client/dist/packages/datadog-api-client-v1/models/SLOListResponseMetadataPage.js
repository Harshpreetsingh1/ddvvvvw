"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOListResponseMetadataPage = void 0;
/**
 * The object containing information about the pages of the list of SLOs.
 */
class SLOListResponseMetadataPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOListResponseMetadataPage.attributeTypeMap;
    }
}
exports.SLOListResponseMetadataPage = SLOListResponseMetadataPage;
/**
 * @ignore
 */
SLOListResponseMetadataPage.attributeTypeMap = {
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    totalFilteredCount: {
        baseName: "total_filtered_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOListResponseMetadataPage.js.map