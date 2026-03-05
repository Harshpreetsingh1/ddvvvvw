"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeAccountConfiguration = void 0;
/**
 * The EventBridge configuration for one AWS account.
 */
class AWSEventBridgeAccountConfiguration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeAccountConfiguration.attributeTypeMap;
    }
}
exports.AWSEventBridgeAccountConfiguration = AWSEventBridgeAccountConfiguration;
/**
 * @ignore
 */
AWSEventBridgeAccountConfiguration.attributeTypeMap = {
    accountId: {
        baseName: "accountId",
        type: "string",
    },
    eventHubs: {
        baseName: "eventHubs",
        type: "Array<AWSEventBridgeSource>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeAccountConfiguration.js.map