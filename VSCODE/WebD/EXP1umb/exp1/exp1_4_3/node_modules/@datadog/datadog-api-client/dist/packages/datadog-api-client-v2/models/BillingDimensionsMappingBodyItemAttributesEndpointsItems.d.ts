/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus } from "./BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * An endpoint's keys mapped to the billing_dimension.
 */
export declare class BillingDimensionsMappingBodyItemAttributesEndpointsItems {
    /**
     * The URL for the endpoint.
     */
    "id"?: string;
    /**
     * The billing dimension.
     */
    "keys"?: Array<string>;
    /**
     * Denotes whether mapping keys were available for this endpoint.
     */
    "status"?: BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus;
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
