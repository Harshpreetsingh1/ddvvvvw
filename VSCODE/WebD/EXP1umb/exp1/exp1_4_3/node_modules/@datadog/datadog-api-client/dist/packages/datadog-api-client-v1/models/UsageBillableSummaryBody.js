"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageBillableSummaryBody = void 0;
/**
 * Response with properties for each aggregated usage type.
 */
class UsageBillableSummaryBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageBillableSummaryBody.attributeTypeMap;
    }
}
exports.UsageBillableSummaryBody = UsageBillableSummaryBody;
/**
 * @ignore
 */
UsageBillableSummaryBody.attributeTypeMap = {
    accountBillableUsage: {
        baseName: "account_billable_usage",
        type: "number",
        format: "int64",
    },
    accountCommittedUsage: {
        baseName: "account_committed_usage",
        type: "number",
        format: "int64",
    },
    accountOnDemandUsage: {
        baseName: "account_on_demand_usage",
        type: "number",
        format: "int64",
    },
    elapsedUsageHours: {
        baseName: "elapsed_usage_hours",
        type: "number",
        format: "int64",
    },
    firstBillableUsageHour: {
        baseName: "first_billable_usage_hour",
        type: "Date",
        format: "date-time",
    },
    lastBillableUsageHour: {
        baseName: "last_billable_usage_hour",
        type: "Date",
        format: "date-time",
    },
    orgBillableUsage: {
        baseName: "org_billable_usage",
        type: "number",
        format: "int64",
    },
    percentageInAccount: {
        baseName: "percentage_in_account",
        type: "number",
        format: "double",
    },
    usageUnit: {
        baseName: "usage_unit",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageBillableSummaryBody.js.map