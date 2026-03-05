"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPostRequest = void 0;
/**
 * Azure config Post Request.
 */
class AzureUCConfigPostRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPostRequest.attributeTypeMap;
    }
}
exports.AzureUCConfigPostRequest = AzureUCConfigPostRequest;
/**
 * @ignore
 */
AzureUCConfigPostRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AzureUCConfigPostData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPostRequest.js.map