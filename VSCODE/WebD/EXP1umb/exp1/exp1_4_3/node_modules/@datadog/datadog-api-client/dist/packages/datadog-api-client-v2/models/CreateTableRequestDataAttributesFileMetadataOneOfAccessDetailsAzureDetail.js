"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail = void 0;
/**
 * Azure Blob Storage access configuration.
 */
class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail = CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
/**
 * @ignore
 */
CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.attributeTypeMap = {
    azureClientId: {
        baseName: "azure_client_id",
        type: "string",
        required: true,
    },
    azureContainerName: {
        baseName: "azure_container_name",
        type: "string",
        required: true,
    },
    azureStorageAccountName: {
        baseName: "azure_storage_account_name",
        type: "string",
        required: true,
    },
    azureTenantId: {
        baseName: "azure_tenant_id",
        type: "string",
        required: true,
    },
    filePath: {
        baseName: "file_path",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.js.map