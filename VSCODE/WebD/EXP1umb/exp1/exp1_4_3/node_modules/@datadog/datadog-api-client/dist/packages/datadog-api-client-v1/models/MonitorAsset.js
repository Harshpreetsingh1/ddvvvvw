"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorAsset = void 0;
/**
 * Represents key links tied to a monitor to help users take action on alerts.
 * This feature is in Preview and only available to users with the feature enabled.
 */
class MonitorAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorAsset.attributeTypeMap;
    }
}
exports.MonitorAsset = MonitorAsset;
/**
 * @ignore
 */
MonitorAsset.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "MonitorAssetCategory",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    resourceKey: {
        baseName: "resource_key",
        type: "string",
    },
    resourceType: {
        baseName: "resource_type",
        type: "MonitorAssetResourceType",
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorAsset.js.map