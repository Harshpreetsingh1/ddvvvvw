"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRumUnitsResponse = void 0;
/**
 * Response containing the number of RUM Units for each hour for a given organization.
 */
class UsageRumUnitsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageRumUnitsResponse.attributeTypeMap;
    }
}
exports.UsageRumUnitsResponse = UsageRumUnitsResponse;
/**
 * @ignore
 */
UsageRumUnitsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageRumUnitsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageRumUnitsResponse.js.map