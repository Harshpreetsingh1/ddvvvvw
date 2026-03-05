"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsDecoderProcessor = void 0;
/**
 * The decoder processor decodes any source attribute containing a
 * base64/base16-encoded UTF-8/ASCII string back to its original value, storing the
 * result in a target attribute.
 */
class LogsDecoderProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsDecoderProcessor.attributeTypeMap;
    }
}
exports.LogsDecoderProcessor = LogsDecoderProcessor;
/**
 * @ignore
 */
LogsDecoderProcessor.attributeTypeMap = {
    binaryToTextEncoding: {
        baseName: "binary_to_text_encoding",
        type: "LogsDecoderProcessorBinaryToTextEncoding",
        required: true,
    },
    inputRepresentation: {
        baseName: "input_representation",
        type: "LogsDecoderProcessorInputRepresentation",
        required: true,
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
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
        type: "LogsDecoderProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsDecoderProcessor.js.map