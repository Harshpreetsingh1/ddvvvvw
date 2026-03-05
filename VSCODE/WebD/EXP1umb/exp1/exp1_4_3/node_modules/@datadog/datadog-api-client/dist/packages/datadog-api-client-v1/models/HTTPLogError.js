"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPLogError = void 0;
/**
 * Invalid query performed.
 */
class HTTPLogError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPLogError.attributeTypeMap;
    }
}
exports.HTTPLogError = HTTPLogError;
/**
 * @ignore
 */
HTTPLogError.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "number",
        required: true,
        format: "int32",
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPLogError.js.map