"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorOptionsSchedulingOptions = void 0;
/**
 * Configuration options for scheduling.
 */
class MonitorOptionsSchedulingOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorOptionsSchedulingOptions.attributeTypeMap;
    }
}
exports.MonitorOptionsSchedulingOptions = MonitorOptionsSchedulingOptions;
/**
 * @ignore
 */
MonitorOptionsSchedulingOptions.attributeTypeMap = {
    customSchedule: {
        baseName: "custom_schedule",
        type: "MonitorOptionsCustomSchedule",
    },
    evaluationWindow: {
        baseName: "evaluation_window",
        type: "MonitorOptionsSchedulingOptionsEvaluationWindow",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorOptionsSchedulingOptions.js.map