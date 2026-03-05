"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourceResponse = void 0;
/**
 * Response schema when interacting with a Confluent resource.
 */
class ConfluentResourceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourceResponse.attributeTypeMap;
    }
}
exports.ConfluentResourceResponse = ConfluentResourceResponse;
/**
 * @ignore
 */
ConfluentResourceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConfluentResourceResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentResourceResponse.js.map