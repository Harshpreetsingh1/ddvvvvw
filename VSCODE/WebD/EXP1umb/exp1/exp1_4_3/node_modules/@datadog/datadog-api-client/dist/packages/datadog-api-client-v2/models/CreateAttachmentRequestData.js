"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttachmentRequestData = void 0;
/**
 * Attachment data for a create request.
 */
class CreateAttachmentRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAttachmentRequestData.attributeTypeMap;
    }
}
exports.CreateAttachmentRequestData = CreateAttachmentRequestData;
/**
 * @ignore
 */
CreateAttachmentRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateAttachmentRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=CreateAttachmentRequestData.js.map