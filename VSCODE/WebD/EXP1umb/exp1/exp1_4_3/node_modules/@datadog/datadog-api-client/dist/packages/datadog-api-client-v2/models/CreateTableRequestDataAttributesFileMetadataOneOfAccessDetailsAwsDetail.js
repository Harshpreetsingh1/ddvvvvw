"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail = void 0;
/**
 * Amazon Web Services S3 storage access configuration.
 */
class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail = CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
/**
 * @ignore
 */
CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap = {
    awsAccountId: {
        baseName: "aws_account_id",
        type: "string",
        required: true,
    },
    awsBucketName: {
        baseName: "aws_bucket_name",
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
//# sourceMappingURL=CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail.js.map