"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetAttributes = void 0;
/**
 * The JSON:API attributes of the asset.
 */
class AssetAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssetAttributes.attributeTypeMap;
    }
}
exports.AssetAttributes = AssetAttributes;
/**
 * @ignore
 */
AssetAttributes.attributeTypeMap = {
    arch: {
        baseName: "arch",
        type: "string",
    },
    environments: {
        baseName: "environments",
        type: "Array<string>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    operatingSystem: {
        baseName: "operating_system",
        type: "AssetOperatingSystem",
    },
    risks: {
        baseName: "risks",
        type: "AssetRisks",
        required: true,
    },
    teams: {
        baseName: "teams",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "AssetType",
        required: true,
    },
    version: {
        baseName: "version",
        type: "AssetVersion",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AssetAttributes.js.map