"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerDutyServiceKey = void 0;
/**
 * PagerDuty service object key.
 */
class PagerDutyServiceKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PagerDutyServiceKey.attributeTypeMap;
    }
}
exports.PagerDutyServiceKey = PagerDutyServiceKey;
/**
 * @ignore
 */
PagerDutyServiceKey.attributeTypeMap = {
    serviceKey: {
        baseName: "service_key",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PagerDutyServiceKey.js.map