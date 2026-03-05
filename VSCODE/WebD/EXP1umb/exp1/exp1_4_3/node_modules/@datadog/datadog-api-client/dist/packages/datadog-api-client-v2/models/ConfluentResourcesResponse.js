"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourcesResponse = void 0;
/**
 * Response schema when interacting with a list of Confluent resources.
 */
class ConfluentResourcesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourcesResponse.attributeTypeMap;
    }
}
exports.ConfluentResourcesResponse = ConfluentResourcesResponse;
/**
 * @ignore
 */
ConfluentResourcesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ConfluentResourceResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentResourcesResponse.js.map