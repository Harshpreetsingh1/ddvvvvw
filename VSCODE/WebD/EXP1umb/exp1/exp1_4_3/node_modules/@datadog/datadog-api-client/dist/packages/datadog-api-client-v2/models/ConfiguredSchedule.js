"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredSchedule = void 0;
/**
 * Full resource representation of a configured schedule target with position (previous, current, or next).
 */
class ConfiguredSchedule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfiguredSchedule.attributeTypeMap;
    }
}
exports.ConfiguredSchedule = ConfiguredSchedule;
/**
 * @ignore
 */
ConfiguredSchedule.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ConfiguredScheduleTargetAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ConfiguredScheduleTargetRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ConfiguredScheduleTargetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfiguredSchedule.js.map