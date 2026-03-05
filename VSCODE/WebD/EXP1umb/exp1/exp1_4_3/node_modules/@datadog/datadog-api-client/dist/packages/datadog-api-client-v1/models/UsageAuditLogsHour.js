"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAuditLogsHour = void 0;
/**
 * Audit logs usage for a given organization for a given hour.
 */
class UsageAuditLogsHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAuditLogsHour.attributeTypeMap;
    }
}
exports.UsageAuditLogsHour = UsageAuditLogsHour;
/**
 * @ignore
 */
UsageAuditLogsHour.attributeTypeMap = {
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    linesIndexed: {
        baseName: "lines_indexed",
        type: "number",
        format: "int64",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageAuditLogsHour.js.map