/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafCustomRuleAction } from "./ApplicationSecurityWafCustomRuleAction";
import { ApplicationSecurityWafCustomRuleCondition } from "./ApplicationSecurityWafCustomRuleCondition";
import { ApplicationSecurityWafCustomRuleMetadata } from "./ApplicationSecurityWafCustomRuleMetadata";
import { ApplicationSecurityWafCustomRuleScope } from "./ApplicationSecurityWafCustomRuleScope";
import { ApplicationSecurityWafCustomRuleTags } from "./ApplicationSecurityWafCustomRuleTags";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A WAF custom rule.
 */
export declare class ApplicationSecurityWafCustomRuleAttributes {
    /**
     * The definition of `ApplicationSecurityWafCustomRuleAction` object.
     */
    "action"?: ApplicationSecurityWafCustomRuleAction;
    /**
     * Indicates whether the WAF custom rule will block the request.
     */
    "blocking": boolean;
    /**
     * Conditions for which the WAF Custom Rule will triggers, all conditions needs to match in order for the WAF
     * rule to trigger.
     */
    "conditions": Array<ApplicationSecurityWafCustomRuleCondition>;
    /**
     * Indicates whether the WAF custom rule is enabled.
     */
    "enabled": boolean;
    /**
     * Metadata associated with the WAF Custom Rule.
     */
    "metadata"?: ApplicationSecurityWafCustomRuleMetadata;
    /**
     * The Name of the WAF custom rule.
     */
    "name": string;
    /**
     * The path glob for the WAF custom rule.
     */
    "pathGlob"?: string;
    /**
     * The scope of the WAF custom rule.
     */
    "scope"?: Array<ApplicationSecurityWafCustomRuleScope>;
    /**
     * Tags associated with the WAF Custom Rule. The concatenation of category and type will form the security
     * activity field associated with the traces.
     */
    "tags": ApplicationSecurityWafCustomRuleTags;
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
