/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails } from "./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Cloud storage file metadata for create requests. Both access_details and sync_enabled are required.
 */
export declare class CreateTableRequestDataAttributesFileMetadataCloudStorage {
    /**
     * Cloud storage access configuration for the reference table data file.
     */
    "accessDetails": CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails;
    /**
     * Whether this table is synced automatically.
     */
    "syncEnabled": boolean;
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
