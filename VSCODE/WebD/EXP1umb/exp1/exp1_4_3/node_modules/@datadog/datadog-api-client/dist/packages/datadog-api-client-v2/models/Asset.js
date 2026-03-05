"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
/**
 * A single vulnerable asset
 */
class Asset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Asset.attributeTypeMap;
    }
}
exports.Asset = Asset;
/**
 * @ignore
 */
Asset.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AssetAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AssetEntityType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Asset.js.map