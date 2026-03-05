"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateResponse = void 0;
/**
 * Amazon EventBridge create response body.
 */
class AWSEventBridgeCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateResponse.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateResponse = AWSEventBridgeCreateResponse;
/**
 * @ignore
 */
AWSEventBridgeCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSEventBridgeCreateResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeCreateResponse.js.map