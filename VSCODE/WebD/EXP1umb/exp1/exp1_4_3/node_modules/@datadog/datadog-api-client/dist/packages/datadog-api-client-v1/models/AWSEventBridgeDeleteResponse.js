"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteResponse = void 0;
/**
 * An indicator of the successful deletion of an EventBridge source.
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
    status: {
        baseName: "status",
        type: "AWSEventBridgeDeleteStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeDeleteResponse.js.map