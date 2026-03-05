"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalAssigneeUpdateRequest = void 0;
/**
 * Attributes describing an assignee update operation over a security signal.
 */
class SignalAssigneeUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SignalAssigneeUpdateRequest.attributeTypeMap;
    }
}
exports.SignalAssigneeUpdateRequest = SignalAssigneeUpdateRequest;
/**
 * @ignore
 */
SignalAssigneeUpdateRequest.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "string",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SignalAssigneeUpdateRequest.js.map