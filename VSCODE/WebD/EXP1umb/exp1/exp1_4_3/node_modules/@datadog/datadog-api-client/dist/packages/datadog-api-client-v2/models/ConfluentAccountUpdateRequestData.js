"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountUpdateRequestData = void 0;
/**
 * Data object for updating a Confluent account.
 */
class ConfluentAccountUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountUpdateRequestData.attributeTypeMap;
    }
}
exports.ConfluentAccountUpdateRequestData = ConfluentAccountUpdateRequestData;
/**
 * @ignore
 */
ConfluentAccountUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConfluentAccountUpdateRequestAttributes",
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
//# sourceMappingURL=ConfluentAccountUpdateRequestData.js.map