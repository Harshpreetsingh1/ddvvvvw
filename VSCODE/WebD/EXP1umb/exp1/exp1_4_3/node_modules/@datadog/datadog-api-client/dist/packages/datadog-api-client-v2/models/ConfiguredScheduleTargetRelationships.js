"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredScheduleTargetRelationships = void 0;
/**
 * Represents the relationships of a configured schedule target.
 */
class ConfiguredScheduleTargetRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfiguredScheduleTargetRelationships.attributeTypeMap;
    }
}
exports.ConfiguredScheduleTargetRelationships = ConfiguredScheduleTargetRelationships;
/**
 * @ignore
 */
ConfiguredScheduleTargetRelationships.attributeTypeMap = {
    schedule: {
        baseName: "schedule",
        type: "ConfiguredScheduleTargetRelationshipsSchedule",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfiguredScheduleTargetRelationships.js.map