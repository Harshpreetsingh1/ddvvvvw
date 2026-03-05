"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOThreshold = void 0;
/**
 * SLO thresholds (target and optionally warning) for a single time window.
 */
class SLOThreshold {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOThreshold.attributeTypeMap;
    }
}
exports.SLOThreshold = SLOThreshold;
/**
 * @ignore
 */
SLOThreshold.attributeTypeMap = {
    target: {
        baseName: "target",
        type: "number",
        required: true,
        format: "double",
    },
    targetDisplay: {
        baseName: "target_display",
        type: "string",
    },
    timeframe: {
        baseName: "timeframe",
        type: "SLOTimeframe",
        required: true,
    },
    warning: {
        baseName: "warning",
        type: "number",
        format: "double",
    },
    warningDisplay: {
        baseName: "warning_display",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOThreshold.js.map