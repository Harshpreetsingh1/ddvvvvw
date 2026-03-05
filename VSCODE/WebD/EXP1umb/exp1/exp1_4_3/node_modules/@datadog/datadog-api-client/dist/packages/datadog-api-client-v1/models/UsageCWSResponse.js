"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCWSResponse = void 0;
/**
 * Response containing the Cloud Workload Security usage for each hour for a given organization.
 */
class UsageCWSResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCWSResponse.attributeTypeMap;
    }
}
exports.UsageCWSResponse = UsageCWSResponse;
/**
 * @ignore
 */
UsageCWSResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageCWSHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCWSResponse.js.map