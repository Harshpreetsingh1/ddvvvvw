"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAuditLogsResponse = void 0;
/**
 * Response containing the audit logs usage for each hour for a given organization.
 */
class UsageAuditLogsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAuditLogsResponse.attributeTypeMap;
    }
}
exports.UsageAuditLogsResponse = UsageAuditLogsResponse;
/**
 * @ignore
 */
UsageAuditLogsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageAuditLogsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageAuditLogsResponse.js.map