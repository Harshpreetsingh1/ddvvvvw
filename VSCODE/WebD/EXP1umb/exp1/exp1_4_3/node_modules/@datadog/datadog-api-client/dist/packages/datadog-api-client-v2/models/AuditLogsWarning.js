"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsWarning = void 0;
/**
 * Warning message indicating something that went wrong with the query.
 */
class AuditLogsWarning {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuditLogsWarning.attributeTypeMap;
    }
}
exports.AuditLogsWarning = AuditLogsWarning;
/**
 * @ignore
 */
AuditLogsWarning.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "string",
    },
    detail: {
        baseName: "detail",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuditLogsWarning.js.map