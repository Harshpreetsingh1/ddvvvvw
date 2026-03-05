"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkDeleteAppsDatastoreItemsRequestData = void 0;
/**
 * Data wrapper containing the data needed to delete items from a datastore.
 */
class BulkDeleteAppsDatastoreItemsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkDeleteAppsDatastoreItemsRequestData.attributeTypeMap;
    }
}
exports.BulkDeleteAppsDatastoreItemsRequestData = BulkDeleteAppsDatastoreItemsRequestData;
/**
 * @ignore
 */
BulkDeleteAppsDatastoreItemsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BulkDeleteAppsDatastoreItemsRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "BulkDeleteAppsDatastoreItemsRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkDeleteAppsDatastoreItemsRequestData.js.map