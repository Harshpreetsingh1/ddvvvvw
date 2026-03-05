"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkPutAppsDatastoreItemsRequest = void 0;
/**
 * Request to insert multiple items into a datastore in a single operation.
 */
class BulkPutAppsDatastoreItemsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkPutAppsDatastoreItemsRequest.attributeTypeMap;
    }
}
exports.BulkPutAppsDatastoreItemsRequest = BulkPutAppsDatastoreItemsRequest;
/**
 * @ignore
 */
BulkPutAppsDatastoreItemsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BulkPutAppsDatastoreItemsRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkPutAppsDatastoreItemsRequest.js.map