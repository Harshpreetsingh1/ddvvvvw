"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPairsResponse = void 0;
/**
 * Response of Azure config pair.
 */
class AzureUCConfigPairsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPairsResponse.attributeTypeMap;
    }
}
exports.AzureUCConfigPairsResponse = AzureUCConfigPairsResponse;
/**
 * @ignore
 */
AzureUCConfigPairsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AzureUCConfigPair",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPairsResponse.js.map