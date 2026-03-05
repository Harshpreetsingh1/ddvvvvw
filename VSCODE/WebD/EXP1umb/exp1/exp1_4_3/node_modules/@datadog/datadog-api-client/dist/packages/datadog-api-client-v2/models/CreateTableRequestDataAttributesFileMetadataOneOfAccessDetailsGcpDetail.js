"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail = void 0;
/**
 * Google Cloud Platform storage access configuration.
 */
class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail = CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail;
/**
 * @ignore
 */
CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail.attributeTypeMap = {
    filePath: {
        baseName: "file_path",
        type: "string",
        required: true,
    },
    gcpBucketName: {
        baseName: "gcp_bucket_name",
        type: "string",
        required: true,
    },
    gcpProjectId: {
        baseName: "gcp_project_id",
        type: "string",
        required: true,
    },
    gcpServiceAccountEmail: {
        baseName: "gcp_service_account_email",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail.js.map