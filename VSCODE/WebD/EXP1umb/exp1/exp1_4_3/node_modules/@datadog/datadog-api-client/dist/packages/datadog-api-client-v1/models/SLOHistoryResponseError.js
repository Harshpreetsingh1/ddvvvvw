"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryResponseError = void 0;
/**
 * A list of errors while querying the history data for the service level objective.
 */
class SLOHistoryResponseError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryResponseError.attributeTypeMap;
    }
}
exports.SLOHistoryResponseError = SLOHistoryResponseError;
/**
 * @ignore
 */
SLOHistoryResponseError.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryResponseError.js.map