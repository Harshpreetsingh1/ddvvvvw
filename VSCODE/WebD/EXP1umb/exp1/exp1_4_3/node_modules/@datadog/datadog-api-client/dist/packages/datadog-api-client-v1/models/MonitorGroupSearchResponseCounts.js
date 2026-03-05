"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorGroupSearchResponseCounts = void 0;
/**
 * The counts of monitor groups per different criteria.
 */
class MonitorGroupSearchResponseCounts {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorGroupSearchResponseCounts.attributeTypeMap;
    }
}
exports.MonitorGroupSearchResponseCounts = MonitorGroupSearchResponseCounts;
/**
 * @ignore
 */
MonitorGroupSearchResponseCounts.attributeTypeMap = {
    status: {
        baseName: "status",
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
//# sourceMappingURL=MonitorGroupSearchResponseCounts.js.map