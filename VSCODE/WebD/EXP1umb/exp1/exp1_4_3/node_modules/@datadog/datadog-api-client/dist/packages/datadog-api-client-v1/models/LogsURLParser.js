"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsURLParser = void 0;
/**
 * This processor extracts query parameters and other important parameters from a URL.
 */
class LogsURLParser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsURLParser.attributeTypeMap;
    }
}
exports.LogsURLParser = LogsURLParser;
/**
 * @ignore
 */
LogsURLParser.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    normalizeEndingSlashes: {
        baseName: "normalize_ending_slashes",
        type: "boolean",
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
        required: true,
    },
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsURLParserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsURLParser.js.map