/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Metadata associated with the WAF Custom Rule.
 */
export declare class ApplicationSecurityWafCustomRuleMetadata {
    /**
     * The date and time the WAF custom rule was created.
     */
    "addedAt"?: Date;
    /**
     * The handle of the user who created the WAF custom rule.
     */
    "addedBy"?: string;
    /**
     * The name of the user who created the WAF custom rule.
     */
    "addedByName"?: string;
    /**
     * The date and time the WAF custom rule was last updated.
     */
    "modifiedAt"?: Date;
    /**
     * The handle of the user who last updated the WAF custom rule.
     */
    "modifiedBy"?: string;
    /**
     * The name of the user who last updated the WAF custom rule.
     */
    "modifiedByName"?: string;
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
