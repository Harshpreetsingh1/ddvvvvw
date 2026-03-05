"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventAttributesAuthor = void 0;
/**
 * The entity that made the change.
 */
class ChangeEventAttributesAuthor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventAttributesAuthor.attributeTypeMap;
    }
}
exports.ChangeEventAttributesAuthor = ChangeEventAttributesAuthor;
/**
 * @ignore
 */
ChangeEventAttributesAuthor.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ChangeEventAttributesAuthorType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeEventAttributesAuthor.js.map