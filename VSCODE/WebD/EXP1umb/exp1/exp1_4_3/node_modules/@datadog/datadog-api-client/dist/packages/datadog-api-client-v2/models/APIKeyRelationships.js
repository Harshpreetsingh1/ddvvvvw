"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyRelationships = void 0;
/**
 * Resources related to the API key.
 */
class APIKeyRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyRelationships.attributeTypeMap;
    }
}
exports.APIKeyRelationships = APIKeyRelationships;
/**
 * @ignore
 */
APIKeyRelationships.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "RelationshipToUser",
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "NullableRelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeyRelationships.js.map