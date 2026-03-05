"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
/**
 * An attachment response containing the attachment data and related objects.
 */
class Attachment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}
exports.Attachment = Attachment;
/**
 * @ignore
 */
Attachment.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AttachmentData",
    },
    included: {
        baseName: "included",
        type: "Array<AttachmentIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Attachment.js.map