"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountCreateRequestData = void 0;
/**
 * The data body for adding a Confluent account.
 */
class ConfluentAccountCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountCreateRequestData.attributeTypeMap;
    }
}
exports.ConfluentAccountCreateRequestData = ConfluentAccountCreateRequestData;
/**
 * @ignore
 */
ConfluentAccountCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConfluentAccountCreateRequestAttributes",
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
//# sourceMappingURL=ConfluentAccountCreateRequestData.js.map