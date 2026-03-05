"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestOptionsScheduling = void 0;
/**
 * Object containing timeframes and timezone used for advanced scheduling.
 */
class SyntheticsTestOptionsScheduling {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestOptionsScheduling.attributeTypeMap;
    }
}
exports.SyntheticsTestOptionsScheduling = SyntheticsTestOptionsScheduling;
/**
 * @ignore
 */
SyntheticsTestOptionsScheduling.attributeTypeMap = {
    timeframes: {
        baseName: "timeframes",
        type: "Array<SyntheticsTestOptionsSchedulingTimeframe>",
        required: true,
    },
    timezone: {
        baseName: "timezone",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestOptionsScheduling.js.map