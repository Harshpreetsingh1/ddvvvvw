"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsListResponse = void 0;
/**
 * Response object with all logs matching the request and pagination information.
 */
class LogsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsListResponse.attributeTypeMap;
    }
}
exports.LogsListResponse = LogsListResponse;
/**
 * @ignore
 */
LogsListResponse.attributeTypeMap = {
    logs: {
        baseName: "logs",
        type: "Array<Log>",
    },
    nextLogId: {
        baseName: "nextLogId",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsListResponse.js.map