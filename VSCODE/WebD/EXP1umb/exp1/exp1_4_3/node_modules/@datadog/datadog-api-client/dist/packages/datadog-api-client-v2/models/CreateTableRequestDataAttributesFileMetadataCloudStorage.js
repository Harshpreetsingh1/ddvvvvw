"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesFileMetadataCloudStorage = void 0;
/**
 * Cloud storage file metadata for create requests. Both access_details and sync_enabled are required.
 */
class CreateTableRequestDataAttributesFileMetadataCloudStorage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesFileMetadataCloudStorage.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesFileMetadataCloudStorage = CreateTableRequestDataAttributesFileMetadataCloudStorage;
/**
 * @ignore
 */
CreateTableRequestDataAttributesFileMetadataCloudStorage.attributeTypeMap = {
    accessDetails: {
        baseName: "access_details",
        type: "CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails",
        required: true,
    },
    syncEnabled: {
        baseName: "sync_enabled",
        type: "boolean",
        required: true,
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesFileMetadataCloudStorage.js.map