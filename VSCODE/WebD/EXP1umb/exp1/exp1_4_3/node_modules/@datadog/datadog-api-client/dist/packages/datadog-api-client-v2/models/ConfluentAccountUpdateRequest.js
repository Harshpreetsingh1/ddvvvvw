"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountUpdateRequest = void 0;
/**
 * The JSON:API request for updating a Confluent account.
 */
class ConfluentAccountUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountUpdateRequest.attributeTypeMap;
    }
}
exports.ConfluentAccountUpdateRequest = ConfluentAccountUpdateRequest;
/**
 * @ignore
 */
ConfluentAccountUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConfluentAccountUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountUpdateRequest.js.map