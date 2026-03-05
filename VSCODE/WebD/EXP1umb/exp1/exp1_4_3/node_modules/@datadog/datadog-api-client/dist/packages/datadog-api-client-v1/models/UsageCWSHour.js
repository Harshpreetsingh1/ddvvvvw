"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCWSHour = void 0;
/**
 * Cloud Workload Security usage for a given organization for a given hour.
 */
class UsageCWSHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCWSHour.attributeTypeMap;
    }
}
exports.UsageCWSHour = UsageCWSHour;
/**
 * @ignore
 */
UsageCWSHour.attributeTypeMap = {
    cwsContainerCount: {
        baseName: "cws_container_count",
        type: "number",
        format: "int64",
    },
    cwsHostCount: {
        baseName: "cws_host_count",
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
//# sourceMappingURL=UsageCWSHour.js.map