"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountsResponse = void 0;
/**
 * Confluent account returned by the API.
 */
class ConfluentAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountsResponse.attributeTypeMap;
    }
}
exports.ConfluentAccountsResponse = ConfluentAccountsResponse;
/**
 * @ignore
 */
ConfluentAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ConfluentAccountResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountsResponse.js.map