"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogsEvent = void 0;
/**
 * Object description of an Audit Logs event after it is processed and stored by Datadog.
 */
class AuditLogsEvent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuditLogsEvent.attributeTypeMap;
    }
}
exports.AuditLogsEvent = AuditLogsEvent;
/**
 * @ignore
 */
AuditLogsEvent.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AuditLogsEventAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AuditLogsEventType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuditLogsEvent.js.map