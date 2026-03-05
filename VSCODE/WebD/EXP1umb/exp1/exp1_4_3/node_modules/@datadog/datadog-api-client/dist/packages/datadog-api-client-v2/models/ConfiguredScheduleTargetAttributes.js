"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredScheduleTargetAttributes = void 0;
/**
 * Attributes for a configured schedule target, including position.
 */
class ConfiguredScheduleTargetAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfiguredScheduleTargetAttributes.attributeTypeMap;
    }
}
exports.ConfiguredScheduleTargetAttributes = ConfiguredScheduleTargetAttributes;
/**
 * @ignore
 */
ConfiguredScheduleTargetAttributes.attributeTypeMap = {
    position: {
        baseName: "position",
        type: "ScheduleTargetPosition",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfiguredScheduleTargetAttributes.js.map