"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsStringBuilderProcessor = void 0;
/**
 * Use the string builder processor to add a new attribute (without spaces or special characters)
 * to a log with the result of the provided template.
 * This enables aggregation of different attributes or raw strings into a single attribute.
 *
 * The template is defined by both raw text and blocks with the syntax `%{attribute_path}`.
 *
 * **Notes**:
 *
 * - The processor only accepts attributes with values or an array of values in the blocks.
 * - If an attribute cannot be used (object or array of object),
 *   it is replaced by an empty string or the entire operation is skipped depending on your selection.
 * - If the target attribute already exists, it is overwritten by the result of the template.
 * - Results of the template cannot exceed 256 characters.
 */
class LogsStringBuilderProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsStringBuilderProcessor.attributeTypeMap;
    }
}
exports.LogsStringBuilderProcessor = LogsStringBuilderProcessor;
/**
 * @ignore
 */
LogsStringBuilderProcessor.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    isReplaceMissing: {
        baseName: "is_replace_missing",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    template: {
        baseName: "template",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsStringBuilderProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsStringBuilderProcessor.js.map