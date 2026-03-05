"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteRequest = void 0;
/**
 * Amazon EventBridge delete request body.
 */
class AWSEventBridgeDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeDeleteRequest.attributeTypeMap;
    }
}
exports.AWSEventBridgeDeleteRequest = AWSEventBridgeDeleteRequest;
/**
 * @ignore
 */
AWSEventBridgeDeleteRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSEventBridgeDeleteRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeDeleteRequest.js.map