"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageFargateHour = void 0;
/**
 * Number of Fargate tasks run and hourly usage.
 */
class UsageFargateHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageFargateHour.attributeTypeMap;
    }
}
exports.UsageFargateHour = UsageFargateHour;
/**
 * @ignore
 */
UsageFargateHour.attributeTypeMap = {
    apmFargateCount: {
        baseName: "apm_fargate_count",
        type: "number",
        format: "int64",
    },
    appsecFargateCount: {
        baseName: "appsec_fargate_count",
        type: "number",
        format: "int64",
    },
    avgProfiledFargateTasks: {
        baseName: "avg_profiled_fargate_tasks",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    tasksCount: {
        baseName: "tasks_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageFargateHour.js.map