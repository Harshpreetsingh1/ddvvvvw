/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleResponseDataAttributesCostsToAllocateItems } from "./ArbitraryRuleResponseDataAttributesCostsToAllocateItems";
import { ArbitraryRuleResponseDataAttributesStrategy } from "./ArbitraryRuleResponseDataAttributesStrategy";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `ArbitraryRuleResponseDataAttributes` object.
 */
export declare class ArbitraryRuleResponseDataAttributes {
    /**
     * The `attributes` `costs_to_allocate`.
     */
    "costsToAllocate": Array<ArbitraryRuleResponseDataAttributesCostsToAllocateItems>;
    /**
     * The `attributes` `created`.
     */
    "created": Date;
    /**
     * The `attributes` `enabled`.
     */
    "enabled": boolean;
    /**
     * The `attributes` `last_modified_user_uuid`.
     */
    "lastModifiedUserUuid": string;
    /**
     * The `attributes` `order_id`.
     */
    "orderId": number;
    /**
     * The `attributes` `processing_status`.
     */
    "processingStatus"?: string;
    /**
     * The `attributes` `provider`.
     */
    "provider": Array<string>;
    /**
     * The `attributes` `rejected`.
     */
    "rejected"?: boolean;
    /**
     * The `attributes` `rule_name`.
     */
    "ruleName": string;
    /**
     * The definition of `ArbitraryRuleResponseDataAttributesStrategy` object.
     */
    "strategy": ArbitraryRuleResponseDataAttributesStrategy;
    /**
     * The `attributes` `type`.
     */
    "type": string;
    /**
     * The `attributes` `updated`.
     */
    "updated": Date;
    /**
     * The `attributes` `version`.
     */
    "version": number;
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
