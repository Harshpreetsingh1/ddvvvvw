"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryResponseErrorWithType = void 0;
/**
 * An object describing the error with error type and error message.
 */
class SLOHistoryResponseErrorWithType {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryResponseErrorWithType.attributeTypeMap;
    }
}
exports.SLOHistoryResponseErrorWithType = SLOHistoryResponseErrorWithType;
/**
 * @ignore
 */
SLOHistoryResponseErrorWithType.attributeTypeMap = {
    errorMessage: {
        baseName: "error_message",
        type: "string",
        required: true,
    },
    errorType: {
        baseName: "error_type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryResponseErrorWithType.js.map