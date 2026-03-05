"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessfulSignalUpdateResponse = void 0;
/**
 * Updated signal data following a successfully performed update.
 */
class SuccessfulSignalUpdateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SuccessfulSignalUpdateResponse.attributeTypeMap;
    }
}
exports.SuccessfulSignalUpdateResponse = SuccessfulSignalUpdateResponse;
/**
 * @ignore
 */
SuccessfulSignalUpdateResponse.attributeTypeMap = {
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SuccessfulSignalUpdateResponse.js.map