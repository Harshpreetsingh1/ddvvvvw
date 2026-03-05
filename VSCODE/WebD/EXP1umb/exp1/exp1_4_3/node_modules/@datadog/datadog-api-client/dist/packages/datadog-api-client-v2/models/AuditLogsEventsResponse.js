"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsEventsResponse = void 0;
/**
 * Response object with all events matching the request and pagination information.
 */
class AuditLogsEventsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuditLogsEventsResponse.attributeTypeMap;
    }
}
exports.AuditLogsEventsResponse = AuditLogsEventsResponse;
/**
 * @ignore
 */
AuditLogsEventsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AuditLogsEvent>",
    },
    links: {
        baseName: "links",
        type: "AuditLogsResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "AuditLogsResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuditLogsEventsResponse.js.map