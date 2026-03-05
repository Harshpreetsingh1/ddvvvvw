/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems } from "./ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategy } from "./ArbitraryCostUpsertRequestDataAttributesStrategy";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributes` object.
 */
export declare class ArbitraryCostUpsertRequestDataAttributes {
    /**
     * The `attributes` `costs_to_allocate`.
     */
    "costsToAllocate": Array<ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems>;
    /**
     * The `attributes` `enabled`.
     */
    "enabled"?: boolean;
    /**
     * The `attributes` `order_id`.
     */
    "orderId"?: number;
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
     * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategy` object.
     */
    "strategy": ArbitraryCostUpsertRequestDataAttributesStrategy;
    /**
     * The `attributes` `type`.
     */
    "type": string;
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
