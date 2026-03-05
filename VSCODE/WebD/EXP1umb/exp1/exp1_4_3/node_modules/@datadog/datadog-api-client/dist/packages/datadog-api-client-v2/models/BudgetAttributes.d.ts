/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BudgetWithEntriesDataAttributesEntriesItems } from "./BudgetWithEntriesDataAttributesEntriesItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The attributes of a budget.
 */
export declare class BudgetAttributes {
    /**
     * The timestamp when the budget was created.
     */
    "createdAt"?: number;
    /**
     * The id of the user that created the budget.
     */
    "createdBy"?: string;
    /**
     * The month when the budget ends.
     */
    "endMonth"?: number;
    "entries"?: Array<BudgetWithEntriesDataAttributesEntriesItems>;
    /**
     * The cost query used to track against the budget.
     */
    "metricsQuery"?: string;
    /**
     * The name of the budget.
     */
    "name"?: string;
    /**
     * The id of the org the budget belongs to.
     */
    "orgId"?: number;
    /**
     * The month when the budget starts.
     */
    "startMonth"?: number;
    /**
     * The sum of all budget entries' amounts.
     */
    "totalAmount"?: number;
    /**
     * The timestamp when the budget was last updated.
     */
    "updatedAt"?: number;
    /**
     * The id of the user that created the budget.
     */
    "updatedBy"?: string;
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
