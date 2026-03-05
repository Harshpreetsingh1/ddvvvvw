"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkDeleteAppsDatastoreItemsRequest = void 0;
/**
 * Request to delete items from a datastore.
 */
class BulkDeleteAppsDatastoreItemsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkDeleteAppsDatastoreItemsRequest.attributeTypeMap;
    }
}
exports.BulkDeleteAppsDatastoreItemsRequest = BulkDeleteAppsDatastoreItemsRequest;
/**
 * @ignore
 */
BulkDeleteAppsDatastoreItemsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BulkDeleteAppsDatastoreItemsRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkDeleteAppsDatastoreItemsRequest.js.map