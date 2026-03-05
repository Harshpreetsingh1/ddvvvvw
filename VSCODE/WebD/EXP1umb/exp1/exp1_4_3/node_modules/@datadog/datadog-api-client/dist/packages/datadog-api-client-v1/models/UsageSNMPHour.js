"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSNMPHour = void 0;
/**
 * The number of SNMP devices for each hour for a given organization.
 */
class UsageSNMPHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSNMPHour.attributeTypeMap;
    }
}
exports.UsageSNMPHour = UsageSNMPHour;
/**
 * @ignore
 */
UsageSNMPHour.attributeTypeMap = {
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
    snmpDevices: {
        baseName: "snmp_devices",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSNMPHour.js.map