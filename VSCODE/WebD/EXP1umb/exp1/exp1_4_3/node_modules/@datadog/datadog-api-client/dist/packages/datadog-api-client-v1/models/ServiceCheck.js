"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCheck = void 0;
/**
 * An object containing service check and status.
 */
class ServiceCheck {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceCheck.attributeTypeMap;
    }
}
exports.ServiceCheck = ServiceCheck;
/**
 * @ignore
 */
ServiceCheck.attributeTypeMap = {
    check: {
        baseName: "check",
        type: "string",
        required: true,
    },
    hostName: {
        baseName: "host_name",
        type: "string",
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "ServiceCheckStatus",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    timestamp: {
        baseName: "timestamp",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceCheck.js.map