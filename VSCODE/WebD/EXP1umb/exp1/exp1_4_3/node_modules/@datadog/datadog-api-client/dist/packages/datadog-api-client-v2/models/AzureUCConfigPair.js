"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPair = void 0;
/**
 * Azure config pair.
 */
class AzureUCConfigPair {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPair.attributeTypeMap;
    }
}
exports.AzureUCConfigPair = AzureUCConfigPair;
/**
 * @ignore
 */
AzureUCConfigPair.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AzureUCConfigPairAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AzureUCConfigPairType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPair.js.map