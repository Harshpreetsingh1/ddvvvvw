"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCloudSecurityPostureManagementResponse = void 0;
/**
 * The response containing the Cloud Security Management Pro usage for each hour for a given organization.
 */
class UsageCloudSecurityPostureManagementResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCloudSecurityPostureManagementResponse.attributeTypeMap;
    }
}
exports.UsageCloudSecurityPostureManagementResponse = UsageCloudSecurityPostureManagementResponse;
/**
 * @ignore
 */
UsageCloudSecurityPostureManagementResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageCloudSecurityPostureManagementHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCloudSecurityPostureManagementResponse.js.map