"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateResponseData = void 0;
/**
 * Amazon EventBridge create response data.
 */
class AWSEventBridgeCreateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateResponseData.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateResponseData = AWSEventBridgeCreateResponseData;
/**
 * @ignore
 */
AWSEventBridgeCreateResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSEventBridgeCreateResponseAttributes",
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
//# sourceMappingURL=AWSEventBridgeCreateResponseData.js.map