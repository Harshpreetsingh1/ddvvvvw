"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksResponsePage = void 0;
/**
 * Pagination metadata returned by the API.
 */
class NotebooksResponsePage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebooksResponsePage.attributeTypeMap;
    }
}
exports.NotebooksResponsePage = NotebooksResponsePage;
/**
 * @ignore
 */
NotebooksResponsePage.attributeTypeMap = {
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
//# sourceMappingURL=NotebooksResponsePage.js.map