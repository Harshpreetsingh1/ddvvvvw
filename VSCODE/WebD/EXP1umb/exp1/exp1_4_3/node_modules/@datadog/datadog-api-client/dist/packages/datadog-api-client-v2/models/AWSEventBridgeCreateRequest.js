"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateRequest = void 0;
/**
 * Amazon EventBridge create request body.
 */
class AWSEventBridgeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateRequest.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateRequest = AWSEventBridgeCreateRequest;
/**
 * @ignore
 */
AWSEventBridgeCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSEventBridgeCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeCreateRequest.js.map