"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLogsByIndexResponse = void 0;
/**
 * Response containing the number of indexed logs for each hour and index for a given organization.
 */
class UsageLogsByIndexResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLogsByIndexResponse.attributeTypeMap;
    }
}
exports.UsageLogsByIndexResponse = UsageLogsByIndexResponse;
/**
 * @ignore
 */
UsageLogsByIndexResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageLogsByIndexHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLogsByIndexResponse.js.map