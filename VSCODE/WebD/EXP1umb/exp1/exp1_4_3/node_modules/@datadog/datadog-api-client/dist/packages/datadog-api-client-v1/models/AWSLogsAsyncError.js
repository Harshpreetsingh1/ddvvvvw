"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsAsyncError = void 0;
/**
 * Description of errors.
 */
class AWSLogsAsyncError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsAsyncError.attributeTypeMap;
    }
}
exports.AWSLogsAsyncError = AWSLogsAsyncError;
/**
 * @ignore
 */
AWSLogsAsyncError.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsAsyncError.js.map