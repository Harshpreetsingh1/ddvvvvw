"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteResponseData = void 0;
/**
 * Amazon EventBridge delete response data.
 */
class AWSEventBridgeDeleteResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeDeleteResponseData.attributeTypeMap;
    }
}
exports.AWSEventBridgeDeleteResponseData = AWSEventBridgeDeleteResponseData;
/**
 * @ignore
 */
AWSEventBridgeDeleteResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSEventBridgeDeleteResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=AWSEventBridgeDeleteResponseData.js.map