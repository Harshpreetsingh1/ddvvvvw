"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeLocation = void 0;
/**
 * Code vulnerability location.
 */
class CodeLocation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CodeLocation.attributeTypeMap;
    }
}
exports.CodeLocation = CodeLocation;
/**
 * @ignore
 */
CodeLocation.attributeTypeMap = {
    filePath: {
        baseName: "file_path",
        type: "string",
    },
    location: {
        baseName: "location",
        type: "string",
        required: true,
    },
    method: {
        baseName: "method",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CodeLocation.js.map