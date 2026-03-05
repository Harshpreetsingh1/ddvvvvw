"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAPILimitReachedResponse = void 0;
/**
 * Response returned by the Logs API when the max limit has been reached.
 */
class LogsAPILimitReachedResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAPILimitReachedResponse.attributeTypeMap;
    }
}
exports.LogsAPILimitReachedResponse = LogsAPILimitReachedResponse;
/**
 * @ignore
 */
LogsAPILimitReachedResponse.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "LogsAPIError",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAPILimitReachedResponse.js.map