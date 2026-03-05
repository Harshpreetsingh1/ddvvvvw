"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesFileMetadataLocalFile = void 0;
/**
 * Local file metadata for create requests using the upload ID.
 */
class CreateTableRequestDataAttributesFileMetadataLocalFile {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesFileMetadataLocalFile.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesFileMetadataLocalFile = CreateTableRequestDataAttributesFileMetadataLocalFile;
/**
 * @ignore
 */
CreateTableRequestDataAttributesFileMetadataLocalFile.attributeTypeMap = {
    uploadId: {
        baseName: "upload_id",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesFileMetadataLocalFile.js.map