"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigsResponse = void 0;
/**
 * List of Azure accounts with configs.
 */
class AzureUCConfigsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigsResponse.attributeTypeMap;
    }
}
exports.AzureUCConfigsResponse = AzureUCConfigsResponse;
/**
 * @ignore
 */
AzureUCConfigsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AzureUCConfigPair>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigsResponse.js.map