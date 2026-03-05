"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountResponseAttributes = void 0;
/**
 * The attributes of a Confluent account.
 */
class ConfluentAccountResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountResponseAttributes.attributeTypeMap;
    }
}
exports.ConfluentAccountResponseAttributes = ConfluentAccountResponseAttributes;
/**
 * @ignore
 */
ConfluentAccountResponseAttributes.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    resources: {
        baseName: "resources",
        type: "Array<ConfluentResourceResponseAttributes>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountResponseAttributes.js.map