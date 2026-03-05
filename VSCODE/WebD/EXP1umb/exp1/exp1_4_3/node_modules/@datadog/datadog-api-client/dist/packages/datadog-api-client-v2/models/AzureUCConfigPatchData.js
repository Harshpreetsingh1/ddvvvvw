"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPatchData = void 0;
/**
 * Azure config Patch data.
 */
class AzureUCConfigPatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPatchData.attributeTypeMap;
    }
}
exports.AzureUCConfigPatchData = AzureUCConfigPatchData;
/**
 * @ignore
 */
AzureUCConfigPatchData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AzureUCConfigPatchRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "AzureUCConfigPatchRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPatchData.js.map