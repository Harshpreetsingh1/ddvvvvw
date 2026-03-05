/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems` object.
 */
export declare class ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems {
    /**
     * The `items` `allocated_tags`.
     */
    "allocatedTags": Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>;
    /**
     * The `items` `percentage`. The numeric value format should be a 32bit float value.
     */
    "percentage": number;
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
