"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOThreshold = void 0;
/**
 * SLO thresholds (target and optionally warning) for a single time window.
 */
class SearchSLOThreshold {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOThreshold.attributeTypeMap;
    }
}
exports.SearchSLOThreshold = SearchSLOThreshold;
/**
 * @ignore
 */
SearchSLOThreshold.attributeTypeMap = {
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
        type: "SearchSLOTimeframe",
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
//# sourceMappingURL=SearchSLOThreshold.js.map