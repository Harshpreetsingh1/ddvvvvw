"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRequestBodyFile = void 0;
/**
 * Object describing a file to be used as part of the request in the test.
 */
class SyntheticsTestRequestBodyFile {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestRequestBodyFile.attributeTypeMap;
    }
}
exports.SyntheticsTestRequestBodyFile = SyntheticsTestRequestBodyFile;
/**
 * @ignore
 */
SyntheticsTestRequestBodyFile.attributeTypeMap = {
    bucketKey: {
        baseName: "bucketKey",
        type: "string",
    },
    content: {
        baseName: "content",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    originalFileName: {
        baseName: "originalFileName",
        type: "string",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestRequestBodyFile.js.map