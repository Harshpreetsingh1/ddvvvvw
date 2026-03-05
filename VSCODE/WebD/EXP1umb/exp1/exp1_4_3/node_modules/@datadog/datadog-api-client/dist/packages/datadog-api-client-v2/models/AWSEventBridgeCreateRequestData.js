"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateRequestData = void 0;
/**
 * Amazon EventBridge create request data.
 */
class AWSEventBridgeCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateRequestData.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateRequestData = AWSEventBridgeCreateRequestData;
/**
 * @ignore
 */
AWSEventBridgeCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSEventBridgeCreateRequestAttributes",
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
//# sourceMappingURL=AWSEventBridgeCreateRequestData.js.map