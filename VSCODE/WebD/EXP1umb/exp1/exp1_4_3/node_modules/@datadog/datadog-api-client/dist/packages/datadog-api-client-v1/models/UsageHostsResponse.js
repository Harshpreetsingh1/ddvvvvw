"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageHostsResponse = void 0;
/**
 * Host usage response.
 */
class UsageHostsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageHostsResponse.attributeTypeMap;
    }
}
exports.UsageHostsResponse = UsageHostsResponse;
/**
 * @ignore
 */
UsageHostsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageHostHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageHostsResponse.js.map