"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppsDatastoreResponse = void 0;
/**
 * Response after successfully creating a new datastore, containing the datastore's assigned ID.
 */
class CreateAppsDatastoreResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppsDatastoreResponse.attributeTypeMap;
    }
}
exports.CreateAppsDatastoreResponse = CreateAppsDatastoreResponse;
/**
 * @ignore
 */
CreateAppsDatastoreResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateAppsDatastoreResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppsDatastoreResponse.js.map