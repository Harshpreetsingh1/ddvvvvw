"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorThresholdWindowOptions = void 0;
/**
 * Alerting time window options.
 */
class MonitorThresholdWindowOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorThresholdWindowOptions.attributeTypeMap;
    }
}
exports.MonitorThresholdWindowOptions = MonitorThresholdWindowOptions;
/**
 * @ignore
 */
MonitorThresholdWindowOptions.attributeTypeMap = {
    recoveryWindow: {
        baseName: "recovery_window",
        type: "string",
    },
    triggerWindow: {
        baseName: "trigger_window",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorThresholdWindowOptions.js.map