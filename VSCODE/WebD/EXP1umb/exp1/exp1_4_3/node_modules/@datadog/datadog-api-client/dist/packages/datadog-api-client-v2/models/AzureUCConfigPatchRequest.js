"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPatchRequest = void 0;
/**
 * Azure config Patch Request.
 */
class AzureUCConfigPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPatchRequest.attributeTypeMap;
    }
}
exports.AzureUCConfigPatchRequest = AzureUCConfigPatchRequest;
/**
 * @ignore
 */
AzureUCConfigPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AzureUCConfigPatchData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPatchRequest.js.map