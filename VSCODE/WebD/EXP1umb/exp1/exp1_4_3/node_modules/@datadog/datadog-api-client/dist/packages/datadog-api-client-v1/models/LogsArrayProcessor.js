"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArrayProcessor = void 0;
/**
 * A processor for extracting, aggregating, or transforming values from JSON arrays within your logs.
 * Supported operations are:
 * - Select value from matching element
 * - Compute array length
 * - Append a value to an array
 */
class LogsArrayProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArrayProcessor.attributeTypeMap;
    }
}
exports.LogsArrayProcessor = LogsArrayProcessor;
/**
 * @ignore
 */
LogsArrayProcessor.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    operation: {
        baseName: "operation",
        type: "LogsArrayProcessorOperation",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsArrayProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArrayProcessor.js.map