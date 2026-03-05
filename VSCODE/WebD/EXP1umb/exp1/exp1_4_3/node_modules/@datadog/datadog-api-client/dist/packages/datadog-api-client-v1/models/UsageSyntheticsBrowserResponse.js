"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSyntheticsBrowserResponse = void 0;
/**
 * Response containing the number of Synthetics Browser tests run for each hour for a given organization.
 */
class UsageSyntheticsBrowserResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSyntheticsBrowserResponse.attributeTypeMap;
    }
}
exports.UsageSyntheticsBrowserResponse = UsageSyntheticsBrowserResponse;
/**
 * @ignore
 */
UsageSyntheticsBrowserResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageSyntheticsBrowserHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSyntheticsBrowserResponse.js.map