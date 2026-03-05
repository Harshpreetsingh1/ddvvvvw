/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Google Cloud Platform storage access configuration.
 */
export declare class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail {
    /**
     * The relative file path from the GCS bucket root to the CSV file.
     */
    "filePath": string;
    /**
     * GCP bucket containing the CSV file.
     */
    "gcpBucketName": string;
    /**
     * GCP project ID where the bucket is located.
     */
    "gcpProjectId": string;
    /**
     * Service account email with read permissions for the GCS bucket.
     */
    "gcpServiceAccountEmail": string;
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
