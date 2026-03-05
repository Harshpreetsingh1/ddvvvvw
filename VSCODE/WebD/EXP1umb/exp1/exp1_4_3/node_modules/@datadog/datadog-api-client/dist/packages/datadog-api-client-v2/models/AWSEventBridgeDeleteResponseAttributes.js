"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteResponseAttributes = void 0;
/**
 * The EventBridge source delete response attributes.
 */
class AWSEventBridgeDeleteResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeDeleteResponseAttributes.attributeTypeMap;
    }
}
exports.AWSEventBridgeDeleteResponseAttributes = AWSEventBridgeDeleteResponseAttributes;
/**
 * @ignore
 */
AWSEventBridgeDeleteResponseAttributes.attributeTypeMap = {
    status: {
        baseName: "status",
        type: "AWSEventBridgeDeleteStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeDeleteResponseAttributes.js.map