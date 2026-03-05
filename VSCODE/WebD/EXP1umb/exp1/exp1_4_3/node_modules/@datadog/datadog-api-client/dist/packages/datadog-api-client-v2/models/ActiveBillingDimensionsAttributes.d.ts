/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * List of active billing dimensions.
 */
export declare class ActiveBillingDimensionsAttributes {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]`.
     */
    "month"?: Date;
    /**
     * List of active billing dimensions. Example: `[infra_host, apm_host, serverless_infra]`.
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
