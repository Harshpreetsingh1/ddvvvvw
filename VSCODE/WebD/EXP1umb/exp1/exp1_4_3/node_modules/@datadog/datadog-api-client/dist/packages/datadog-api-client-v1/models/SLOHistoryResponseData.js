"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryResponseData = void 0;
/**
 * An array of service level objective objects.
 */
class SLOHistoryResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryResponseData.attributeTypeMap;
    }
}
exports.SLOHistoryResponseData = SLOHistoryResponseData;
/**
 * @ignore
 */
SLOHistoryResponseData.attributeTypeMap = {
    fromTs: {
        baseName: "from_ts",
        type: "number",
        format: "int64",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    groups: {
        baseName: "groups",
        type: "Array<SLOHistoryMonitor>",
    },
    monitors: {
        baseName: "monitors",
        type: "Array<SLOHistoryMonitor>",
    },
    overall: {
        baseName: "overall",
        type: "SLOHistorySLIData",
    },
    series: {
        baseName: "series",
        type: "SLOHistoryMetrics",
    },
    thresholds: {
        baseName: "thresholds",
        type: "{ [key: string]: SLOThreshold; }",
    },
    toTs: {
        baseName: "to_ts",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "SLOType",
    },
    typeId: {
        baseName: "type_id",
        type: "SLOTypeNumeric",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryResponseData.js.map