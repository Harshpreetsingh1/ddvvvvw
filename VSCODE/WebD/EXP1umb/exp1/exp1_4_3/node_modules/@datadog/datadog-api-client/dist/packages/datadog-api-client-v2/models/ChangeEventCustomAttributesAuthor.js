"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventCustomAttributesAuthor = void 0;
/**
 * The entity that made the change. Optional, if provided it must include `type` and `name`.
 */
class ChangeEventCustomAttributesAuthor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventCustomAttributesAuthor.attributeTypeMap;
    }
}
exports.ChangeEventCustomAttributesAuthor = ChangeEventCustomAttributesAuthor;
/**
 * @ignore
 */
ChangeEventCustomAttributesAuthor.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ChangeEventCustomAttributesAuthorType",
        required: true,
    },
};
//# sourceMappingURL=ChangeEventCustomAttributesAuthor.js.map