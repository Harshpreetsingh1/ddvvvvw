"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerDutyServiceName = void 0;
/**
 * PagerDuty service object name.
 */
class PagerDutyServiceName {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PagerDutyServiceName.attributeTypeMap;
    }
}
exports.PagerDutyServiceName = PagerDutyServiceName;
/**
 * @ignore
 */
PagerDutyServiceName.attributeTypeMap = {
    serviceName: {
        baseName: "service_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PagerDutyServiceName.js.map