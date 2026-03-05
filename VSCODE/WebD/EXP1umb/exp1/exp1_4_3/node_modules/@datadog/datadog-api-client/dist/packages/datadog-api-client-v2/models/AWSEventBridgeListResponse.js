"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeListResponse = void 0;
/**
 * Amazon EventBridge list response body.
 */
class AWSEventBridgeListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeListResponse.attributeTypeMap;
    }
}
exports.AWSEventBridgeListResponse = AWSEventBridgeListResponse;
/**
 * @ignore
 */
AWSEventBridgeListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSEventBridgeListResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeListResponse.js.map