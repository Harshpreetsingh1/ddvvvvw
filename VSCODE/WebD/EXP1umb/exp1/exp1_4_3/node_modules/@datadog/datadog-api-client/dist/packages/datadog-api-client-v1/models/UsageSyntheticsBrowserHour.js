"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSyntheticsBrowserHour = void 0;
/**
 * Number of Synthetics Browser tests run for each hour for a given organization.
 */
class UsageSyntheticsBrowserHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSyntheticsBrowserHour.attributeTypeMap;
    }
}
exports.UsageSyntheticsBrowserHour = UsageSyntheticsBrowserHour;
/**
 * @ignore
 */
UsageSyntheticsBrowserHour.attributeTypeMap = {
    browserCheckCallsCount: {
        baseName: "browser_check_calls_count",
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
//# sourceMappingURL=UsageSyntheticsBrowserHour.js.map