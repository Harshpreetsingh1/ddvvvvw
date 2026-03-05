"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttachmentRequestDataAttributesAttachment = void 0;
/**
 * The attachment object for creating an attachment.
 */
class CreateAttachmentRequestDataAttributesAttachment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAttachmentRequestDataAttributesAttachment.attributeTypeMap;
    }
}
exports.CreateAttachmentRequestDataAttributesAttachment = CreateAttachmentRequestDataAttributesAttachment;
/**
 * @ignore
 */
CreateAttachmentRequestDataAttributesAttachment.attributeTypeMap = {
    documentUrl: {
        baseName: "documentUrl",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAttachmentRequestDataAttributesAttachment.js.map