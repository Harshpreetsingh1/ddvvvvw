"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsListRequest = void 0;
/**
 * Object to send with the request to retrieve a list of logs from your Organization.
 */
class LogsListRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsListRequest.attributeTypeMap;
    }
}
exports.LogsListRequest = LogsListRequest;
/**
 * @ignore
 */
LogsListRequest.attributeTypeMap = {
    index: {
        baseName: "index",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    sort: {
        baseName: "sort",
        type: "LogsSort",
    },
    startAt: {
        baseName: "startAt",
        type: "string",
    },
    time: {
        baseName: "time",
        type: "LogsListRequestTime",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsListRequest.js.map