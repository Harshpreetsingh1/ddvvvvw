"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppsDatastoreRequestDataAttributes = void 0;
/**
 * Configuration and metadata to create a new datastore.
 */
class CreateAppsDatastoreRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppsDatastoreRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateAppsDatastoreRequestDataAttributes = CreateAppsDatastoreRequestDataAttributes;
/**
 * @ignore
 */
CreateAppsDatastoreRequestDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    orgAccess: {
        baseName: "org_access",
        type: "CreateAppsDatastoreRequestDataAttributesOrgAccess",
    },
    primaryColumnName: {
        baseName: "primary_column_name",
        type: "string",
        required: true,
    },
    primaryKeyGenerationStrategy: {
        baseName: "primary_key_generation_strategy",
        type: "DatastorePrimaryKeyGenerationStrategy",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppsDatastoreRequestDataAttributes.js.map