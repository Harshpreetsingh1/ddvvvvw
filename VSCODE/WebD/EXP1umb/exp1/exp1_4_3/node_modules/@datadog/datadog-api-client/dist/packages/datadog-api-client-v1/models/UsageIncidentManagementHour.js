"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIncidentManagementHour = void 0;
/**
 * Incident management usage for a given organization for a given hour.
 */
class UsageIncidentManagementHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIncidentManagementHour.attributeTypeMap;
    }
}
exports.UsageIncidentManagementHour = UsageIncidentManagementHour;
/**
 * @ignore
 */
UsageIncidentManagementHour.attributeTypeMap = {
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    monthlyActiveUsers: {
        baseName: "monthly_active_users",
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
//# sourceMappingURL=UsageIncidentManagementHour.js.map