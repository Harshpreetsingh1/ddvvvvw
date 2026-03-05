/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response with monthly summary of data billed by Datadog.
 */
export declare class UsageBillableSummaryHour {
    /**
     * The account name.
     */
    "accountName"?: string;
    /**
     * The account public ID.
     */
    "accountPublicId"?: string;
    /**
     * The billing plan.
     */
    "billingPlan"?: string;
    /**
     * Shows the last date of usage.
     */
    "endDate"?: Date;
    /**
     * The number of organizations.
     */
    "numOrgs"?: number;
    /**
     * The organization name.
     */
    "orgName"?: string;
    /**
     * The organization public ID.
     */
    "publicId"?: string;
    /**
     * Shows usage aggregation for a billing period.
     */
    "ratioInMonth"?: number;
    /**
     * The region of the organization.
     */
    "region"?: string;
    /**
     * Shows the first date of usage.
     */
    "startDate"?: Date;
    /**
     * Response with aggregated usage types.
     */
    "usage"?: UsageBillableSummaryKeys;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
