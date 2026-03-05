"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateResponseAttributes = void 0;
/**
 * A created EventBridge source.
 */
class AWSEventBridgeCreateResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateResponseAttributes.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateResponseAttributes = AWSEventBridgeCreateResponseAttributes;
/**
 * @ignore
 */
AWSEventBridgeCreateResponseAttributes.attributeTypeMap = {
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
//# sourceMappingURL=AWSEventBridgeCreateResponseAttributes.js.map