/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleAction } from "./CloudWorkloadSecurityAgentRuleAction";
import { CloudWorkloadSecurityAgentRuleCreatorAttributes } from "./CloudWorkloadSecurityAgentRuleCreatorAttributes";
import { CloudWorkloadSecurityAgentRuleUpdaterAttributes } from "./CloudWorkloadSecurityAgentRuleUpdaterAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A Cloud Workload Security Agent rule returned by the API
 */
export declare class CloudWorkloadSecurityAgentRuleAttributes {
    /**
     * The array of actions the rule can perform if triggered
     */
    "actions"?: Array<CloudWorkloadSecurityAgentRuleAction>;
    /**
     * The version of the Agent
     */
    "agentConstraint"?: string;
    /**
     * The blocking policies that the rule belongs to
     */
    "blocking"?: Array<string>;
    /**
     * The category of the Agent rule
     */
    "category"?: string;
    /**
     * The ID of the user who created the rule
     */
    "creationAuthorUuId"?: string;
    /**
     * When the Agent rule was created, timestamp in milliseconds
     */
    "creationDate"?: number;
    /**
     * The attributes of the user who created the Agent rule
     */
    "creator"?: CloudWorkloadSecurityAgentRuleCreatorAttributes;
    /**
     * Whether the rule is included by default
     */
    "defaultRule"?: boolean;
    /**
     * The description of the Agent rule
     */
    "description"?: string;
    /**
     * The disabled policies that the rule belongs to
     */
    "disabled"?: Array<string>;
    /**
     * Whether the Agent rule is enabled
     */
    "enabled"?: boolean;
    /**
     * The SECL expression of the Agent rule
     */
    "expression"?: string;
    /**
     * The platforms the Agent rule is supported on
     */
    "filters"?: Array<string>;
    /**
     * The monitoring policies that the rule belongs to
     */
    "monitoring"?: Array<string>;
    /**
     * The name of the Agent rule
     */
    "name"?: string;
    /**
     * The list of product tags associated with the rule
     */
    "productTags"?: Array<string>;
    /**
     * Whether the rule is silent.
     */
    "silent"?: boolean;
    /**
     * The ID of the user who updated the rule
     */
    "updateAuthorUuId"?: string;
    /**
     * Timestamp in milliseconds when the Agent rule was last updated
     */
    "updateDate"?: number;
    /**
     * When the Agent rule was last updated, timestamp in milliseconds
     */
    "updatedAt"?: number;
    /**
     * The attributes of the user who last updated the Agent rule
     */
    "updater"?: CloudWorkloadSecurityAgentRuleUpdaterAttributes;
    /**
     * The version of the Agent rule
     */
    "version"?: number;
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
