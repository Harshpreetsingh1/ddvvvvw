/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCurConfigResponseDataAttributesAccountFilters } from "./AwsCurConfigResponseDataAttributesAccountFilters";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `AwsCurConfigResponseDataAttributes` object.
 */
export declare class AwsCurConfigResponseDataAttributes {
    /**
     * The definition of `AwsCurConfigResponseDataAttributesAccountFilters` object.
     */
    "accountFilters"?: AwsCurConfigResponseDataAttributesAccountFilters;
    /**
     * The `attributes` `account_id`.
     */
    "accountId"?: string;
    /**
     * The `attributes` `bucket_name`.
     */
    "bucketName"?: string;
    /**
     * The `attributes` `bucket_region`.
     */
    "bucketRegion"?: string;
    /**
     * The `attributes` `created_at`.
     */
    "createdAt"?: string;
    /**
     * The `attributes` `error_messages`.
     */
    "errorMessages"?: Array<string>;
    /**
     * The `attributes` `months`.
     */
    "months"?: number;
    /**
     * The `attributes` `report_name`.
     */
    "reportName"?: string;
    /**
     * The `attributes` `report_prefix`.
     */
    "reportPrefix"?: string;
    /**
     * The `attributes` `status`.
     */
    "status"?: string;
    /**
     * The `attributes` `status_updated_at`.
     */
    "statusUpdatedAt"?: string;
    /**
     * The `attributes` `updated_at`.
     */
    "updatedAt"?: string;
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
