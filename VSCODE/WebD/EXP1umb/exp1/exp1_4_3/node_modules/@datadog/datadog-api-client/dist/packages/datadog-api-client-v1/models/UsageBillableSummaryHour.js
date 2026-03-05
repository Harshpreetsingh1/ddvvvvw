"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageBillableSummaryHour = void 0;
/**
 * Response with monthly summary of data billed by Datadog.
 */
class UsageBillableSummaryHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageBillableSummaryHour.attributeTypeMap;
    }
}
exports.UsageBillableSummaryHour = UsageBillableSummaryHour;
/**
 * @ignore
 */
UsageBillableSummaryHour.attributeTypeMap = {
    accountName: {
        baseName: "account_name",
        type: "string",
    },
    accountPublicId: {
        baseName: "account_public_id",
        type: "string",
    },
    billingPlan: {
        baseName: "billing_plan",
        type: "string",
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    numOrgs: {
        baseName: "num_orgs",
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
    ratioInMonth: {
        baseName: "ratio_in_month",
        type: "number",
        format: "double",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    startDate: {
        baseName: "start_date",
        type: "Date",
        format: "date-time",
    },
    usage: {
        baseName: "usage",
        type: "UsageBillableSummaryKeys",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageBillableSummaryHour.js.map