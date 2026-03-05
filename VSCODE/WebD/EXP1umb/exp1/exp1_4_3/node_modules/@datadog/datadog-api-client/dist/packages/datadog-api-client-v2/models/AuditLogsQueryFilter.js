"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsQueryFilter = void 0;
/**
 * Search and filter query settings.
 */
class AuditLogsQueryFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuditLogsQueryFilter.attributeTypeMap;
    }
}
exports.AuditLogsQueryFilter = AuditLogsQueryFilter;
/**
 * @ignore
 */
AuditLogsQueryFilter.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    to: {
        baseName: "to",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuditLogsQueryFilter.js.map