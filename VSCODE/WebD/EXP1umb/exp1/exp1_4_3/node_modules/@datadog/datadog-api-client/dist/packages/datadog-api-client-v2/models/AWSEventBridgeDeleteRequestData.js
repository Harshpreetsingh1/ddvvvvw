"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteRequestData = void 0;
/**
 * Amazon EventBridge delete request data.
 */
class AWSEventBridgeDeleteRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeDeleteRequestData.attributeTypeMap;
    }
}
exports.AWSEventBridgeDeleteRequestData = AWSEventBridgeDeleteRequestData;
/**
 * @ignore
 */
AWSEventBridgeDeleteRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSEventBridgeDeleteRequestAttributes",
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
//# sourceMappingURL=AWSEventBridgeDeleteRequestData.js.map