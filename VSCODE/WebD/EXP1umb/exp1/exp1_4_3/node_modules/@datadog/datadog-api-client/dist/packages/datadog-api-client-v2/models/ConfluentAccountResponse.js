"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountResponse = void 0;
/**
 * The expected response schema when getting a Confluent account.
 */
class ConfluentAccountResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountResponse.attributeTypeMap;
    }
}
exports.ConfluentAccountResponse = ConfluentAccountResponse;
/**
 * @ignore
 */
ConfluentAccountResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConfluentAccountResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountResponse.js.map