"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsSearchEventsRequest = void 0;
/**
 * The request for a Audit Logs events list.
 */
class AuditLogsSearchEventsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuditLogsSearchEventsRequest.attributeTypeMap;
    }
}
exports.AuditLogsSearchEventsRequest = AuditLogsSearchEventsRequest;
/**
 * @ignore
 */
AuditLogsSearchEventsRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "AuditLogsQueryFilter",
    },
    options: {
        baseName: "options",
        type: "AuditLogsQueryOptions",
    },
    page: {
        baseName: "page",
        type: "AuditLogsQueryPageOptions",
    },
    sort: {
        baseName: "sort",
        type: "AuditLogsSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuditLogsSearchEventsRequest.js.map