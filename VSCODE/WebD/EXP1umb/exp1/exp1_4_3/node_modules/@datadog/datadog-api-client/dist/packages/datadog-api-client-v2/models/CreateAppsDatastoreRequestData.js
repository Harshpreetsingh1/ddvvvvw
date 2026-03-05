"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppsDatastoreRequestData = void 0;
/**
 * Data wrapper containing the configuration needed to create a new datastore.
 */
class CreateAppsDatastoreRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppsDatastoreRequestData.attributeTypeMap;
    }
}
exports.CreateAppsDatastoreRequestData = CreateAppsDatastoreRequestData;
/**
 * @ignore
 */
CreateAppsDatastoreRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateAppsDatastoreRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatastoreDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppsDatastoreRequestData.js.map