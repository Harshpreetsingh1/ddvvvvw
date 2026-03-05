"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTriggerCITestRunResult = void 0;
/**
 * Information about a single test run.
 */
class SyntheticsTriggerCITestRunResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTriggerCITestRunResult.attributeTypeMap;
    }
}
exports.SyntheticsTriggerCITestRunResult = SyntheticsTriggerCITestRunResult;
/**
 * @ignore
 */
SyntheticsTriggerCITestRunResult.attributeTypeMap = {
    device: {
        baseName: "device",
        type: "string",
    },
    location: {
        baseName: "location",
        type: "number",
        format: "int64",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    resultId: {
        baseName: "result_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTriggerCITestRunResult.js.map