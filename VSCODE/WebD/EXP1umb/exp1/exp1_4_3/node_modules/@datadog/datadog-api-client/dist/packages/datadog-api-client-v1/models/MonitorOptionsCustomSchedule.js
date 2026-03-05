"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorOptionsCustomSchedule = void 0;
/**
 * Configuration options for the custom schedule. **This feature is in private beta.**
 */
class MonitorOptionsCustomSchedule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorOptionsCustomSchedule.attributeTypeMap;
    }
}
exports.MonitorOptionsCustomSchedule = MonitorOptionsCustomSchedule;
/**
 * @ignore
 */
MonitorOptionsCustomSchedule.attributeTypeMap = {
    recurrences: {
        baseName: "recurrences",
        type: "Array<MonitorOptionsCustomScheduleRecurrence>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorOptionsCustomSchedule.js.map