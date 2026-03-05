"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredScheduleTargetRelationshipsSchedule = void 0;
/**
 * Holds the schedule reference for a configured schedule target.
 */
class ConfiguredScheduleTargetRelationshipsSchedule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfiguredScheduleTargetRelationshipsSchedule.attributeTypeMap;
    }
}
exports.ConfiguredScheduleTargetRelationshipsSchedule = ConfiguredScheduleTargetRelationshipsSchedule;
/**
 * @ignore
 */
ConfiguredScheduleTargetRelationshipsSchedule.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScheduleTarget",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfiguredScheduleTargetRelationshipsSchedule.js.map