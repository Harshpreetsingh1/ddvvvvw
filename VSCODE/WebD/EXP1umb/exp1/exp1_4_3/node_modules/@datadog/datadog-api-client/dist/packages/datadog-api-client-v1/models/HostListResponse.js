"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostListResponse = void 0;
/**
 * Response with Host information from Datadog.
 */
class HostListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostListResponse.attributeTypeMap;
    }
}
exports.HostListResponse = HostListResponse;
/**
 * @ignore
 */
HostListResponse.attributeTypeMap = {
    hostList: {
        baseName: "host_list",
        type: "Array<Host>",
    },
    totalMatching: {
        baseName: "total_matching",
        type: "number",
        format: "int64",
    },
    totalReturned: {
        baseName: "total_returned",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostListResponse.js.map