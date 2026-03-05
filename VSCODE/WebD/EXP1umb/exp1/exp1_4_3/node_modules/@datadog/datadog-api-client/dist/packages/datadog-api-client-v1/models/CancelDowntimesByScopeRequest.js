"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelDowntimesByScopeRequest = void 0;
/**
 * Cancel downtimes according to scope.
 */
class CancelDowntimesByScopeRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CancelDowntimesByScopeRequest.attributeTypeMap;
    }
}
exports.CancelDowntimesByScopeRequest = CancelDowntimesByScopeRequest;
/**
 * @ignore
 */
CancelDowntimesByScopeRequest.attributeTypeMap = {
    scope: {
        baseName: "scope",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CancelDowntimesByScopeRequest.js.map