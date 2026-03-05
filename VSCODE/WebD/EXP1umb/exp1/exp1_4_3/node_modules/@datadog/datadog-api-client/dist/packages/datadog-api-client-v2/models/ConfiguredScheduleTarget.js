"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredScheduleTarget = void 0;
/**
 * Relationship reference to a configured schedule target.
 */
class ConfiguredScheduleTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfiguredScheduleTarget.attributeTypeMap;
    }
}
exports.ConfiguredScheduleTarget = ConfiguredScheduleTarget;
/**
 * @ignore
 */
ConfiguredScheduleTarget.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=ConfiguredScheduleTarget.js.map