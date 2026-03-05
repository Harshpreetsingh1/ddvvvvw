"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails = void 0;
/**
 * Cloud storage access configuration for the reference table data file.
 */
class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails = CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails;
/**
 * @ignore
 */
CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails.attributeTypeMap = {
    awsDetail: {
        baseName: "aws_detail",
        type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail",
    },
    azureDetail: {
        baseName: "azure_detail",
        type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail",
    },
    gcpDetail: {
        baseName: "gcp_detail",
        type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails.js.map