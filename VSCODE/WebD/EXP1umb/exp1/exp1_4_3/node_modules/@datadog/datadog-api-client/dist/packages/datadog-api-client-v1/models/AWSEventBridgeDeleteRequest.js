"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeDeleteRequest = void 0;
/**
 * An object used to delete an EventBridge source.
 */
class AWSEventBridgeDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeDeleteRequest.attributeTypeMap;
    }
}
exports.AWSEventBridgeDeleteRequest = AWSEventBridgeDeleteRequest;
/**
 * @ignore
 */
AWSEventBridgeDeleteRequest.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
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
//# sourceMappingURL=AWSEventBridgeDeleteRequest.js.map