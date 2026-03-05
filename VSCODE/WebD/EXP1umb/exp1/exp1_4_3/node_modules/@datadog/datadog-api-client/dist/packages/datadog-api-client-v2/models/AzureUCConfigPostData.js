"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPostData = void 0;
/**
 * Azure config Post data.
 */
class AzureUCConfigPostData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPostData.attributeTypeMap;
    }
}
exports.AzureUCConfigPostData = AzureUCConfigPostData;
/**
 * @ignore
 */
AzureUCConfigPostData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AzureUCConfigPostRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "AzureUCConfigPostRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPostData.js.map