"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountCreateRequestAttributes = void 0;
/**
 * Attributes associated with the account creation request.
 */
class ConfluentAccountCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountCreateRequestAttributes.attributeTypeMap;
    }
}
exports.ConfluentAccountCreateRequestAttributes = ConfluentAccountCreateRequestAttributes;
/**
 * @ignore
 */
ConfluentAccountCreateRequestAttributes.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    apiSecret: {
        baseName: "api_secret",
        type: "string",
        required: true,
    },
    resources: {
        baseName: "resources",
        type: "Array<ConfluentAccountResourceAttributes>",
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
//# sourceMappingURL=ConfluentAccountCreateRequestAttributes.js.map