"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageProfilingResponse = void 0;
/**
 * Response containing the number of profiled hosts for each hour for a given organization.
 */
class UsageProfilingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageProfilingResponse.attributeTypeMap;
    }
}
exports.UsageProfilingResponse = UsageProfilingResponse;
/**
 * @ignore
 */
UsageProfilingResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageProfilingHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageProfilingResponse.js.map