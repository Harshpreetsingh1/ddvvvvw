"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeListResponseData = void 0;
/**
 * Amazon EventBridge list response data.
 */
class AWSEventBridgeListResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeListResponseData.attributeTypeMap;
    }
}
exports.AWSEventBridgeListResponseData = AWSEventBridgeListResponseData;
/**
 * @ignore
 */
AWSEventBridgeListResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSEventBridgeListResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSEventBridgeType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeListResponseData.js.map