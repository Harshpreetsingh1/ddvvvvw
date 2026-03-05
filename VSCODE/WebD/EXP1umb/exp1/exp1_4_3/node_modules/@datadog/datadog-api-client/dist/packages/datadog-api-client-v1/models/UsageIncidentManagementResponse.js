"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIncidentManagementResponse = void 0;
/**
 * Response containing the incident management usage for each hour for a given organization.
 */
class UsageIncidentManagementResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIncidentManagementResponse.attributeTypeMap;
    }
}
exports.UsageIncidentManagementResponse = UsageIncidentManagementResponse;
/**
 * @ignore
 */
UsageIncidentManagementResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageIncidentManagementHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageIncidentManagementResponse.js.map