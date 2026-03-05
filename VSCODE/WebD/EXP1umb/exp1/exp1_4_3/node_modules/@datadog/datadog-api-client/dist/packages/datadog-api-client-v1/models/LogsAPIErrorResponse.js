"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAPIErrorResponse = void 0;
/**
 * Response returned by the Logs API when errors occur.
 */
class LogsAPIErrorResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAPIErrorResponse.attributeTypeMap;
    }
}
exports.LogsAPIErrorResponse = LogsAPIErrorResponse;
/**
 * @ignore
 */
LogsAPIErrorResponse.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "LogsAPIError",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAPIErrorResponse.js.map