"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSearchResponseCounts = void 0;
/**
 * The counts of monitors per different criteria.
 */
class MonitorSearchResponseCounts {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSearchResponseCounts.attributeTypeMap;
    }
}
exports.MonitorSearchResponseCounts = MonitorSearchResponseCounts;
/**
 * @ignore
 */
MonitorSearchResponseCounts.attributeTypeMap = {
    muted: {
        baseName: "muted",
        type: "Array<MonitorSearchCountItem>",
    },
    status: {
        baseName: "status",
        type: "Array<MonitorSearchCountItem>",
    },
    tag: {
        baseName: "tag",
        type: "Array<MonitorSearchCountItem>",
    },
    type: {
        baseName: "type",
        type: "Array<MonitorSearchCountItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSearchResponseCounts.js.map