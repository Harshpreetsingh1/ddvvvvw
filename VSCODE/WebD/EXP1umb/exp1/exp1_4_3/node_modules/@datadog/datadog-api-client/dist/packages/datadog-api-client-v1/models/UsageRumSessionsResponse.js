"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRumSessionsResponse = void 0;
/**
 * Response containing the number of RUM sessions for each hour for a given organization.
 */
class UsageRumSessionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageRumSessionsResponse.attributeTypeMap;
    }
}
exports.UsageRumSessionsResponse = UsageRumSessionsResponse;
/**
 * @ignore
 */
UsageRumSessionsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageRumSessionsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageRumSessionsResponse.js.map