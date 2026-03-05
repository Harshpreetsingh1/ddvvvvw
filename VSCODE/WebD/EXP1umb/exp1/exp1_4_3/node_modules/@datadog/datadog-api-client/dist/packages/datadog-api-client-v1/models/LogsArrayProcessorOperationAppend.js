"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArrayProcessorOperationAppend = void 0;
/**
 * Operation that appends a value to a target array attribute.
 */
class LogsArrayProcessorOperationAppend {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArrayProcessorOperationAppend.attributeTypeMap;
    }
}
exports.LogsArrayProcessorOperationAppend = LogsArrayProcessorOperationAppend;
/**
 * @ignore
 */
LogsArrayProcessorOperationAppend.attributeTypeMap = {
    preserveSource: {
        baseName: "preserve_source",
        type: "boolean",
    },
    source: {
        baseName: "source",
        type: "string",
        required: true,
    },
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsArrayProcessorOperationAppendType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArrayProcessorOperationAppend.js.map