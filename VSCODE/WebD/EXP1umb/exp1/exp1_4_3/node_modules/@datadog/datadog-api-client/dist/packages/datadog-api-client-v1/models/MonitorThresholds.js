"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorThresholds = void 0;
/**
 * List of the different monitor threshold available.
 */
class MonitorThresholds {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorThresholds.attributeTypeMap;
    }
}
exports.MonitorThresholds = MonitorThresholds;
/**
 * @ignore
 */
MonitorThresholds.attributeTypeMap = {
    critical: {
        baseName: "critical",
        type: "number",
        format: "double",
    },
    criticalRecovery: {
        baseName: "critical_recovery",
        type: "number",
        format: "double",
    },
    ok: {
        baseName: "ok",
        type: "number",
        format: "double",
    },
    unknown: {
        baseName: "unknown",
        type: "number",
        format: "double",
    },
    warning: {
        baseName: "warning",
        type: "number",
        format: "double",
    },
    warningRecovery: {
        baseName: "warning_recovery",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorThresholds.js.map