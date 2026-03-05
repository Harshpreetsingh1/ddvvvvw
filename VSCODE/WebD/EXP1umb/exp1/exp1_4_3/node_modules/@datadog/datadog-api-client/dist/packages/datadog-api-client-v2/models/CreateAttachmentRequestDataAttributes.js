"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttachmentRequestDataAttributes = void 0;
/**
 * The attributes for creating an attachment.
 */
class CreateAttachmentRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAttachmentRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateAttachmentRequestDataAttributes = CreateAttachmentRequestDataAttributes;
/**
 * @ignore
 */
CreateAttachmentRequestDataAttributes.attributeTypeMap = {
    attachment: {
        baseName: "attachment",
        type: "CreateAttachmentRequestDataAttributesAttachment",
    },
    attachmentType: {
        baseName: "attachment_type",
        type: "AttachmentDataAttributesAttachmentType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAttachmentRequestDataAttributes.js.map