"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageNetworkHostsResponse = void 0;
/**
 * Response containing the number of active NPM hosts for each hour for a given organization.
 */
class UsageNetworkHostsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageNetworkHostsResponse.attributeTypeMap;
    }
}
exports.UsageNetworkHostsResponse = UsageNetworkHostsResponse;
/**
 * @ignore
 */
UsageNetworkHostsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageNetworkHostsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageNetworkHostsResponse.js.map