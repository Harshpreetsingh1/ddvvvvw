"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionsPagePagination = void 0;
/**
 * Page-based pagination metadata.
 */
class ConnectionsPagePagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConnectionsPagePagination.attributeTypeMap;
    }
}
exports.ConnectionsPagePagination = ConnectionsPagePagination;
/**
 * @ignore
 */
ConnectionsPagePagination.attributeTypeMap = {
    firstNumber: {
        baseName: "first_number",
        type: "number",
        format: "int64",
    },
    lastNumber: {
        baseName: "last_number",
        type: "number",
        format: "int64",
    },
    nextNumber: {
        baseName: "next_number",
        type: "number",
        format: "int64",
    },
    number: {
        baseName: "number",
        type: "number",
        format: "int64",
    },
    prevNumber: {
        baseName: "prev_number",
        type: "number",
        format: "int64",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=ConnectionsPagePagination.js.map