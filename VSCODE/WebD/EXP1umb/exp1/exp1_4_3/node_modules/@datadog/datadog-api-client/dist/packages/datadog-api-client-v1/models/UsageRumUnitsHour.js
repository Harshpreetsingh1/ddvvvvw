"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRumUnitsHour = void 0;
/**
 * Number of RUM Units used for each hour for a given organization (data available as of November 1, 2021).
 */
class UsageRumUnitsHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageRumUnitsHour.attributeTypeMap;
    }
}
exports.UsageRumUnitsHour = UsageRumUnitsHour;
/**
 * @ignore
 */
UsageRumUnitsHour.attributeTypeMap = {
    browserRumUnits: {
        baseName: "browser_rum_units",
        type: "number",
        format: "int64",
    },
    mobileRumUnits: {
        baseName: "mobile_rum_units",
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
    rumUnits: {
        baseName: "rum_units",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageRumUnitsHour.js.map