"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsByRetentionOrgUsage = void 0;
/**
 * Indexed logs usage by retention for a single organization.
 */
class LogsByRetentionOrgUsage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsByRetentionOrgUsage.attributeTypeMap;
    }
}
exports.LogsByRetentionOrgUsage = LogsByRetentionOrgUsage;
/**
 * @ignore
 */
LogsByRetentionOrgUsage.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<LogsRetentionSumUsage>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsByRetentionOrgUsage.js.map