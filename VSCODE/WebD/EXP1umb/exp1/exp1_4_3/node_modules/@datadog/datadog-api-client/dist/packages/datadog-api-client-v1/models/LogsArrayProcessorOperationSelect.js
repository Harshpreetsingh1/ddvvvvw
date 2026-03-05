"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArrayProcessorOperationSelect = void 0;
/**
 * Operation that finds an object in a `source` array using a `filter`, and then extracts a specific value into the `target` attribute.
 */
class LogsArrayProcessorOperationSelect {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArrayProcessorOperationSelect.attributeTypeMap;
    }
}
exports.LogsArrayProcessorOperationSelect = LogsArrayProcessorOperationSelect;
/**
 * @ignore
 */
LogsArrayProcessorOperationSelect.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "string",
        required: true,
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
        type: "LogsArrayProcessorOperationSelectType",
        required: true,
    },
    valueToExtract: {
        baseName: "value_to_extract",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArrayProcessorOperationSelect.js.map