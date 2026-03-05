"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttachmentRequest = void 0;
/**
 * Create request for an attachment.
 */
class CreateAttachmentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAttachmentRequest.attributeTypeMap;
    }
}
exports.CreateAttachmentRequest = CreateAttachmentRequest;
/**
 * @ignore
 */
CreateAttachmentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateAttachmentRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAttachmentRequest.js.map