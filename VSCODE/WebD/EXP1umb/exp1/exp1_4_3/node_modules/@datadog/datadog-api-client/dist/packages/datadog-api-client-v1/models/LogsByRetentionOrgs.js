"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsByRetentionOrgs = void 0;
/**
 * Indexed logs usage summary for each organization for each retention period with usage.
 */
class LogsByRetentionOrgs {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsByRetentionOrgs.attributeTypeMap;
    }
}
exports.LogsByRetentionOrgs = LogsByRetentionOrgs;
/**
 * @ignore
 */
LogsByRetentionOrgs.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<LogsByRetentionOrgUsage>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsByRetentionOrgs.js.map