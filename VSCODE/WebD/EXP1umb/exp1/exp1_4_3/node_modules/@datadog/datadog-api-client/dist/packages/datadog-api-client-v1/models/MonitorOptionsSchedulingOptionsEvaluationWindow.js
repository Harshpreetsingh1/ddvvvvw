"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorOptionsSchedulingOptionsEvaluationWindow = void 0;
/**
 * Configuration options for the evaluation window. If `hour_starts` is set, no other fields may be set. Otherwise, `day_starts` and `month_starts` must be set together.
 */
class MonitorOptionsSchedulingOptionsEvaluationWindow {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorOptionsSchedulingOptionsEvaluationWindow.attributeTypeMap;
    }
}
exports.MonitorOptionsSchedulingOptionsEvaluationWindow = MonitorOptionsSchedulingOptionsEvaluationWindow;
/**
 * @ignore
 */
MonitorOptionsSchedulingOptionsEvaluationWindow.attributeTypeMap = {
    dayStarts: {
        baseName: "day_starts",
        type: "string",
    },
    hourStarts: {
        baseName: "hour_starts",
        type: "number",
        format: "int32",
    },
    monthStarts: {
        baseName: "month_starts",
        type: "number",
        format: "int32",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorOptionsSchedulingOptionsEvaluationWindow.js.map