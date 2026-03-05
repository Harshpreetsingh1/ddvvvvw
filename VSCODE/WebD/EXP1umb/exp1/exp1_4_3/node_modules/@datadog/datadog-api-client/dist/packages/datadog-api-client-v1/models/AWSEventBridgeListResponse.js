"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeListResponse = void 0;
/**
 * An object describing the EventBridge configuration for multiple accounts.
 */
class AWSEventBridgeListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeListResponse.attributeTypeMap;
    }
}
exports.AWSEventBridgeListResponse = AWSEventBridgeListResponse;
/**
 * @ignore
 */
AWSEventBridgeListResponse.attributeTypeMap = {
    accounts: {
        baseName: "accounts",
        type: "Array<AWSEventBridgeAccountConfiguration>",
    },
    isInstalled: {
        baseName: "isInstalled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeListResponse.js.map