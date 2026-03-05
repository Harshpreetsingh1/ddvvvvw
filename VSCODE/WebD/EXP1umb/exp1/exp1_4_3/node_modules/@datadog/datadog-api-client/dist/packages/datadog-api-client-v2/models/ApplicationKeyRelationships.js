"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKeyRelationships = void 0;
/**
 * Resources related to the application key.
 */
class ApplicationKeyRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKeyRelationships.attributeTypeMap;
    }
}
exports.ApplicationKeyRelationships = ApplicationKeyRelationships;
/**
 * @ignore
 */
ApplicationKeyRelationships.attributeTypeMap = {
    ownedBy: {
        baseName: "owned_by",
        type: "RelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKeyRelationships.js.map