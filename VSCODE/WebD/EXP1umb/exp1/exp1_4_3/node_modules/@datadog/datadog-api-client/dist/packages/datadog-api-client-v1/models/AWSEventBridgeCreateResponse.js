"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateResponse = void 0;
/**
 * A created EventBridge source.
 */
class AWSEventBridgeCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateResponse.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateResponse = AWSEventBridgeCreateResponse;
/**
 * @ignore
 */
AWSEventBridgeCreateResponse.attributeTypeMap = {
    eventSourceName: {
        baseName: "event_source_name",
        type: "string",
    },
    hasBus: {
        baseName: "has_bus",
        type: "boolean",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "AWSEventBridgeCreateStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeCreateResponse.js.map