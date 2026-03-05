"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteResponse = void 0;
/**
 * Amazon EventBridge delete response body.
 */
class AWSEventBridgeDeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeDeleteResponse.attributeTypeMap;
    }
}
exports.AWSEventBridgeDeleteResponse = AWSEventBridgeDeleteResponse;
/**
 * @ignore
 */
AWSEventBridgeDeleteResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSEventBridgeDeleteResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeDeleteResponse.js.map