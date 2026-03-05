"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkPutAppsDatastoreItemsRequestData = void 0;
/**
 * Data wrapper containing the items to insert and their configuration for the bulk insert operation.
 */
class BulkPutAppsDatastoreItemsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkPutAppsDatastoreItemsRequestData.attributeTypeMap;
    }
}
exports.BulkPutAppsDatastoreItemsRequestData = BulkPutAppsDatastoreItemsRequestData;
/**
 * @ignore
 */
BulkPutAppsDatastoreItemsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BulkPutAppsDatastoreItemsRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "DatastoreItemsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkPutAppsDatastoreItemsRequestData.js.map