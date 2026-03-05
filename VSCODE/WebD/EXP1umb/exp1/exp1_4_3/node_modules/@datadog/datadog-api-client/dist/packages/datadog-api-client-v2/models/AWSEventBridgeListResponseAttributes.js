"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeListResponseAttributes = void 0;
/**
 * An object describing the EventBridge configuration for multiple accounts.
 */
class AWSEventBridgeListResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeListResponseAttributes.attributeTypeMap;
    }
}
exports.AWSEventBridgeListResponseAttributes = AWSEventBridgeListResponseAttributes;
/**
 * @ignore
 */
AWSEventBridgeListResponseAttributes.attributeTypeMap = {
    accounts: {
        baseName: "accounts",
        type: "Array<AWSEventBridgeAccountConfiguration>",
    },
    isInstalled: {
        baseName: "is_installed",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeListResponseAttributes.js.map