"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkPutAppsDatastoreItemsRequestDataAttributes = void 0;
/**
 * Configuration for bulk inserting multiple items into a datastore.
 */
class BulkPutAppsDatastoreItemsRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkPutAppsDatastoreItemsRequestDataAttributes.attributeTypeMap;
    }
}
exports.BulkPutAppsDatastoreItemsRequestDataAttributes = BulkPutAppsDatastoreItemsRequestDataAttributes;
/**
 * @ignore
 */
BulkPutAppsDatastoreItemsRequestDataAttributes.attributeTypeMap = {
    conflictMode: {
        baseName: "conflict_mode",
        type: "DatastoreItemConflictMode",
    },
    values: {
        baseName: "values",
        type: "Array<{ [key: string]: any; }>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkPutAppsDatastoreItemsRequestDataAttributes.js.map