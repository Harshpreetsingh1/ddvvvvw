"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppsDatastoreResponseData = void 0;
/**
 * The newly created datastore's data.
 */
class CreateAppsDatastoreResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppsDatastoreResponseData.attributeTypeMap;
    }
}
exports.CreateAppsDatastoreResponseData = CreateAppsDatastoreResponseData;
/**
 * @ignore
 */
CreateAppsDatastoreResponseData.attributeTypeMap = {
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
//# sourceMappingURL=CreateAppsDatastoreResponseData.js.map