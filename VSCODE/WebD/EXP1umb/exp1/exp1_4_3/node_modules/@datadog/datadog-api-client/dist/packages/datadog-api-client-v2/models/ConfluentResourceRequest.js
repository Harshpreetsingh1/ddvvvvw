"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourceRequest = void 0;
/**
 * The JSON:API request for updating a Confluent resource.
 */
class ConfluentResourceRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourceRequest.attributeTypeMap;
    }
}
exports.ConfluentResourceRequest = ConfluentResourceRequest;
/**
 * @ignore
 */
ConfluentResourceRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConfluentResourceRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentResourceRequest.js.map