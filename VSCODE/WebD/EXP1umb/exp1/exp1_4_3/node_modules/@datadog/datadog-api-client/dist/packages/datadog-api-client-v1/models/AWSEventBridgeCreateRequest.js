"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateRequest = void 0;
/**
 * An object used to create an EventBridge source.
 */
class AWSEventBridgeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateRequest.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateRequest = AWSEventBridgeCreateRequest;
/**
 * @ignore
 */
AWSEventBridgeCreateRequest.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    createEventBus: {
        baseName: "create_event_bus",
        type: "boolean",
    },
    eventGeneratorName: {
        baseName: "event_generator_name",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeCreateRequest.js.map