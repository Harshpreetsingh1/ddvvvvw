"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsResponseMetadata = void 0;
/**
 * The metadata associated with a request.
 */
class AuditLogsResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuditLogsResponseMetadata.attributeTypeMap;
    }
}
exports.AuditLogsResponseMetadata = AuditLogsResponseMetadata;
/**
 * @ignore
 */
AuditLogsResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "AuditLogsResponsePage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "AuditLogsResponseStatus",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<AuditLogsWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuditLogsResponseMetadata.js.map