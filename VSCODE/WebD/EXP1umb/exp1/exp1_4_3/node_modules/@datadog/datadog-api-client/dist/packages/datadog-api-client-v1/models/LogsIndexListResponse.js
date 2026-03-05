"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsIndexListResponse = void 0;
/**
 * Object with all Index configurations for a given organization.
 */
class LogsIndexListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsIndexListResponse.attributeTypeMap;
    }
}
exports.LogsIndexListResponse = LogsIndexListResponse;
/**
 * @ignore
 */
LogsIndexListResponse.attributeTypeMap = {
    indexes: {
        baseName: "indexes",
        type: "Array<LogsIndex>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsIndexListResponse.js.map