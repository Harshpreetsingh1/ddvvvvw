"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppEventAttributes = void 0;
/**
 * JSON object containing all event attributes and their associated values.
 */
class CIAppEventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppEventAttributes.attributeTypeMap;
    }
}
exports.CIAppEventAttributes = CIAppEventAttributes;
/**
 * @ignore
 */
CIAppEventAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: any; }",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    testLevel: {
        baseName: "test_level",
        type: "CIAppTestLevel",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppEventAttributes.js.map