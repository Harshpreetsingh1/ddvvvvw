"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRequestProxy = void 0;
/**
 * The proxy to perform the test.
 */
class SyntheticsTestRequestProxy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestRequestProxy.attributeTypeMap;
    }
}
exports.SyntheticsTestRequestProxy = SyntheticsTestRequestProxy;
/**
 * @ignore
 */
SyntheticsTestRequestProxy.attributeTypeMap = {
    headers: {
        baseName: "headers",
        type: "{ [key: string]: string; }",
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestRequestProxy.js.map