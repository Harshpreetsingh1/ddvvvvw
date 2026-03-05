"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSEventBridgeSource = void 0;
/**
 * An EventBridge source.
 */
class AWSEventBridgeSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSEventBridgeSource.attributeTypeMap;
    }
}
exports.AWSEventBridgeSource = AWSEventBridgeSource;
/**
 * @ignore
 */
AWSEventBridgeSource.attributeTypeMap = {
    name: {
        baseName: "name",
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
//# sourceMappingURL=AWSEventBridgeSource.js.map