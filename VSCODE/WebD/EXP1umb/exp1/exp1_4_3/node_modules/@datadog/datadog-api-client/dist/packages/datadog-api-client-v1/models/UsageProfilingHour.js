"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageProfilingHour = void 0;
/**
 * The number of profiled hosts for each hour for a given organization.
 */
class UsageProfilingHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageProfilingHour.attributeTypeMap;
    }
}
exports.UsageProfilingHour = UsageProfilingHour;
/**
 * @ignore
 */
UsageProfilingHour.attributeTypeMap = {
    aasCount: {
        baseName: "aas_count",
        type: "number",
        format: "int64",
    },
    avgContainerAgentCount: {
        baseName: "avg_container_agent_count",
        type: "number",
        format: "int64",
    },
    hostCount: {
        baseName: "host_count",
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageProfilingHour.js.map