"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageNetworkFlowsResponse = void 0;
/**
 * Response containing the number of netflow events indexed for each hour for a given organization.
 */
class UsageNetworkFlowsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageNetworkFlowsResponse.attributeTypeMap;
    }
}
exports.UsageNetworkFlowsResponse = UsageNetworkFlowsResponse;
/**
 * @ignore
 */
UsageNetworkFlowsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageNetworkFlowsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageNetworkFlowsResponse.js.map