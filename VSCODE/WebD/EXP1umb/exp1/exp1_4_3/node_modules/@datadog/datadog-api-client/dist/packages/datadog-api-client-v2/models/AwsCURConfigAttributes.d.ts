/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountFilteringConfig } from "./AccountFilteringConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for An AWS CUR config.
 */
export declare class AwsCURConfigAttributes {
    /**
     * The account filtering configuration.
     */
    "accountFilters"?: AccountFilteringConfig;
    /**
     * The AWS account ID.
     */
    "accountId": string;
    /**
     * The AWS bucket name used to store the Cost and Usage Report.
     */
    "bucketName": string;
    /**
     * The region the bucket is located in.
     */
    "bucketRegion": string;
    /**
     * The timestamp when the AWS CUR config was created.
     */
    "createdAt"?: string;
    /**
     * The error messages for the AWS CUR config.
     */
    "errorMessages"?: Array<string>;
    /**
     * The number of months the report has been backfilled.
     */
    "months"?: number;
    /**
     * The name of the Cost and Usage Report.
     */
    "reportName": string;
    /**
     * The report prefix used for the Cost and Usage Report.
     */
    "reportPrefix": string;
    /**
     * The status of the AWS CUR.
     */
    "status": string;
    /**
     * The timestamp when the AWS CUR config status was updated.
     */
    "statusUpdatedAt"?: string;
    /**
     * The timestamp when the AWS CUR config status was updated.
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
