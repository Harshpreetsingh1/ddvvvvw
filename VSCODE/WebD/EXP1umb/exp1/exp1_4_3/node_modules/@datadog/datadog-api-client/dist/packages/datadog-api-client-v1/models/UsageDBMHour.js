"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageDBMHour = void 0;
/**
 * Database Monitoring usage for a given organization for a given hour.
 */
class UsageDBMHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageDBMHour.attributeTypeMap;
    }
}
exports.UsageDBMHour = UsageDBMHour;
/**
 * @ignore
 */
UsageDBMHour.attributeTypeMap = {
    dbmHostCount: {
        baseName: "dbm_host_count",
        type: "number",
        format: "int64",
    },
    dbmQueriesCount: {
        baseName: "dbm_queries_count",
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
//# sourceMappingURL=UsageDBMHour.js.map