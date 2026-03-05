"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPairAttributes = void 0;
/**
 * Attributes for Azure config pair.
 */
class AzureUCConfigPairAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPairAttributes.attributeTypeMap;
    }
}
exports.AzureUCConfigPairAttributes = AzureUCConfigPairAttributes;
/**
 * @ignore
 */
AzureUCConfigPairAttributes.attributeTypeMap = {
    configs: {
        baseName: "configs",
        type: "Array<AzureUCConfig>",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPairAttributes.js.map