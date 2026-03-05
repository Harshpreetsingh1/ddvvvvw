"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArrayProcessorOperationLength = void 0;
/**
 * Operation that computes the length of a `source` array and stores the result in the `target` attribute.
 */
class LogsArrayProcessorOperationLength {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArrayProcessorOperationLength.attributeTypeMap;
    }
}
exports.LogsArrayProcessorOperationLength = LogsArrayProcessorOperationLength;
/**
 * @ignore
 */
LogsArrayProcessorOperationLength.attributeTypeMap = {
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
        type: "LogsArrayProcessorOperationLengthType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArrayProcessorOperationLength.js.map