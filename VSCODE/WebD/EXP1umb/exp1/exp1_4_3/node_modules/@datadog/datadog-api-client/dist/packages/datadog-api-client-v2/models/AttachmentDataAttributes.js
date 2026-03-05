"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentDataAttributes = void 0;
/**
 * The attachment's attributes.
 */
class AttachmentDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachmentDataAttributes.attributeTypeMap;
    }
}
exports.AttachmentDataAttributes = AttachmentDataAttributes;
/**
 * @ignore
 */
AttachmentDataAttributes.attributeTypeMap = {
    attachment: {
        baseName: "attachment",
        type: "AttachmentDataAttributesAttachment",
    },
    attachmentType: {
        baseName: "attachment_type",
        type: "AttachmentDataAttributesAttachmentType",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachmentDataAttributes.js.map