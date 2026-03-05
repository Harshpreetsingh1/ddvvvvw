"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountResponseData = void 0;
/**
 * An API key and API secret pair that represents a Confluent account.
 */
class ConfluentAccountResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountResponseData.attributeTypeMap;
    }
}
exports.ConfluentAccountResponseData = ConfluentAccountResponseData;
/**
 * @ignore
 */
ConfluentAccountResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConfluentAccountResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ConfluentAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountResponseData.js.map