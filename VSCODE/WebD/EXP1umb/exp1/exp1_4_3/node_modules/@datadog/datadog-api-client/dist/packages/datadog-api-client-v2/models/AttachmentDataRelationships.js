"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentDataRelationships = void 0;
/**
 * The attachment's resource relationships.
 */
class AttachmentDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachmentDataRelationships.attributeTypeMap;
    }
}
exports.AttachmentDataRelationships = AttachmentDataRelationships;
/**
 * @ignore
 */
AttachmentDataRelationships.attributeTypeMap = {
    incident: {
        baseName: "incident",
        type: "RelationshipToIncident",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "RelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachmentDataRelationships.js.map