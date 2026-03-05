"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentArray = void 0;
/**
 * A list of incident attachments.
 */
class AttachmentArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachmentArray.attributeTypeMap;
    }
}
exports.AttachmentArray = AttachmentArray;
/**
 * @ignore
 */
AttachmentArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AttachmentData>",
        required: true,
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
//# sourceMappingURL=AttachmentArray.js.map