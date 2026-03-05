"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageDBMResponse = void 0;
/**
 * Response containing the Database Monitoring usage for each hour for a given organization.
 */
class UsageDBMResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageDBMResponse.attributeTypeMap;
    }
}
exports.UsageDBMResponse = UsageDBMResponse;
/**
 * @ignore
 */
UsageDBMResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageDBMHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageDBMResponse.js.map