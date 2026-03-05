/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems` object.
 */
export declare class ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems {
    /**
     * The `items` `condition`.
     */
    "condition": string;
    /**
     * The `items` `tag`.
     */
    "tag": string;
    /**
     * The `items` `value`.
     */
    "value"?: string;
    /**
     * The `items` `values`.
     */
    "values"?: Array<string>;
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
