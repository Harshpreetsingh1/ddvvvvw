"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorStateGroup = void 0;
/**
 * Monitor state for a single group.
 */
class MonitorStateGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorStateGroup.attributeTypeMap;
    }
}
exports.MonitorStateGroup = MonitorStateGroup;
/**
 * @ignore
 */
MonitorStateGroup.attributeTypeMap = {
    lastNodataTs: {
        baseName: "last_nodata_ts",
        type: "number",
        format: "int64",
    },
    lastNotifiedTs: {
        baseName: "last_notified_ts",
        type: "number",
        format: "int64",
    },
    lastResolvedTs: {
        baseName: "last_resolved_ts",
        type: "number",
        format: "int64",
    },
    lastTriggeredTs: {
        baseName: "last_triggered_ts",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
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
//# sourceMappingURL=MonitorStateGroup.js.map