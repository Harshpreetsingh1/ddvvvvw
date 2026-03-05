"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLambdaHour = void 0;
/**
 * Number of Lambda functions and sum of the invocations of all Lambda functions
 * for each hour for a given organization.
 */
class UsageLambdaHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLambdaHour.attributeTypeMap;
    }
}
exports.UsageLambdaHour = UsageLambdaHour;
/**
 * @ignore
 */
UsageLambdaHour.attributeTypeMap = {
    funcCount: {
        baseName: "func_count",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    invocationsSum: {
        baseName: "invocations_sum",
        type: "number",
        format: "int64",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLambdaHour.js.map