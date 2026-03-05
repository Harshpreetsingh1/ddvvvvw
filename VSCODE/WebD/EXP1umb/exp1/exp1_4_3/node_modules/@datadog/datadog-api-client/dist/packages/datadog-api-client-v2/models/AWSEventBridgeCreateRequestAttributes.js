"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeCreateRequestAttributes = void 0;
/**
 * The EventBridge source to be created.
 */
class AWSEventBridgeCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeCreateRequestAttributes.attributeTypeMap;
    }
}
exports.AWSEventBridgeCreateRequestAttributes = AWSEventBridgeCreateRequestAttributes;
/**
 * @ignore
 */
AWSEventBridgeCreateRequestAttributes.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    createEventBus: {
        baseName: "create_event_bus",
        type: "boolean",
    },
    eventGeneratorName: {
        baseName: "event_generator_name",
        type: "string",
        required: true,
    },
    region: {
        baseName: "region",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSEventBridgeCreateRequestAttributes.js.map