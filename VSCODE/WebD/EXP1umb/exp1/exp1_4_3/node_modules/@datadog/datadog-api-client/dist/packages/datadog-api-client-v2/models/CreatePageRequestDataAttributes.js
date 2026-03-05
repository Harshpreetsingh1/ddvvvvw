"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageRequestDataAttributes = void 0;
/**
 * Details about the On-Call Page you want to create.
 */
class CreatePageRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePageRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreatePageRequestDataAttributes = CreatePageRequestDataAttributes;
/**
 * @ignore
 */
CreatePageRequestDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    target: {
        baseName: "target",
        type: "CreatePageRequestDataAttributesTarget",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    urgency: {
        baseName: "urgency",
        type: "PageUrgency",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePageRequestDataAttributes.js.map