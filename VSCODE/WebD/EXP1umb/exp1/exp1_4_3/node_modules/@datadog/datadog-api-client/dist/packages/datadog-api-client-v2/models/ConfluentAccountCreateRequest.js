"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentAccountCreateRequest = void 0;
/**
 * Payload schema when adding a Confluent account.
 */
class ConfluentAccountCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentAccountCreateRequest.attributeTypeMap;
    }
}
exports.ConfluentAccountCreateRequest = ConfluentAccountCreateRequest;
/**
 * @ignore
 */
ConfluentAccountCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConfluentAccountCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentAccountCreateRequest.js.map