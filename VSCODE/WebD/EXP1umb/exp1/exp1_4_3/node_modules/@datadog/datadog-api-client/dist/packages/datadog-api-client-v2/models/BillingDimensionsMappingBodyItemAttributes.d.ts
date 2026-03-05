/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BillingDimensionsMappingBodyItemAttributesEndpointsItems } from "./BillingDimensionsMappingBodyItemAttributesEndpointsItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Mapping of billing dimensions to endpoint keys.
 */
export declare class BillingDimensionsMappingBodyItemAttributes {
    /**
     * List of supported endpoints with their keys mapped to the billing_dimension.
     */
    "endpoints"?: Array<BillingDimensionsMappingBodyItemAttributesEndpointsItems>;
    /**
     * Label used for the billing dimension in the Plan & Usage charts.
     */
    "inAppLabel"?: string;
    /**
     * Month in ISO-8601 format, UTC, and precise to the second: `[YYYY-MM-DDThh:mm:ss]`.
     */
    "timestamp"?: Date;
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
