"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesResponseMetaPagination = void 0;
/**
 * Pagination metadata
 */
class CasesResponseMetaPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CasesResponseMetaPagination.attributeTypeMap;
    }
}
exports.CasesResponseMetaPagination = CasesResponseMetaPagination;
/**
 * @ignore
 */
CasesResponseMetaPagination.attributeTypeMap = {
    current: {
        baseName: "current",
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CasesResponseMetaPagination.js.map