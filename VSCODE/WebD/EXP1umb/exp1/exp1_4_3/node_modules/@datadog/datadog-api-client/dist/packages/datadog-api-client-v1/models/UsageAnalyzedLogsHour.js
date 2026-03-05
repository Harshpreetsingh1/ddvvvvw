"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAnalyzedLogsHour = void 0;
/**
 * The number of analyzed logs for each hour for a given organization.
 */
class UsageAnalyzedLogsHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAnalyzedLogsHour.attributeTypeMap;
    }
}
exports.UsageAnalyzedLogsHour = UsageAnalyzedLogsHour;
/**
 * @ignore
 */
UsageAnalyzedLogsHour.attributeTypeMap = {
    analyzedLogs: {
        baseName: "analyzed_logs",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
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
//# sourceMappingURL=UsageAnalyzedLogsHour.js.map