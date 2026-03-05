"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorGroupSearchResult = void 0;
/**
 * A single monitor group search result.
 */
class MonitorGroupSearchResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorGroupSearchResult.attributeTypeMap;
    }
}
exports.MonitorGroupSearchResult = MonitorGroupSearchResult;
/**
 * @ignore
 */
MonitorGroupSearchResult.attributeTypeMap = {
    group: {
        baseName: "group",
        type: "string",
    },
    groupTags: {
        baseName: "group_tags",
        type: "Array<string>",
    },
    lastNodataTs: {
        baseName: "last_nodata_ts",
        type: "number",
        format: "int64",
    },
    lastTriggeredTs: {
        baseName: "last_triggered_ts",
        type: "number",
        format: "int64",
    },
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        format: "int64",
    },
    monitorName: {
        baseName: "monitor_name",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "MonitorOverallStates",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorGroupSearchResult.js.map