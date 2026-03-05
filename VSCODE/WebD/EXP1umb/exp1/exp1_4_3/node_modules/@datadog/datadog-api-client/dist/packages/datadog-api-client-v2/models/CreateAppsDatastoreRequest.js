"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppsDatastoreRequest = void 0;
/**
 * Request to create a new datastore with specified configuration and metadata.
 */
class CreateAppsDatastoreRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppsDatastoreRequest.attributeTypeMap;
    }
}
exports.CreateAppsDatastoreRequest = CreateAppsDatastoreRequest;
/**
 * @ignore
 */
CreateAppsDatastoreRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateAppsDatastoreRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppsDatastoreRequest.js.map