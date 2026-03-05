"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentData = void 0;
/**
 * Attachment data from a response.
 */
class AttachmentData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachmentData.attributeTypeMap;
    }
}
exports.AttachmentData = AttachmentData;
/**
 * @ignore
 */
AttachmentData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AttachmentDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "AttachmentDataRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentAttachmentType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachmentData.js.map