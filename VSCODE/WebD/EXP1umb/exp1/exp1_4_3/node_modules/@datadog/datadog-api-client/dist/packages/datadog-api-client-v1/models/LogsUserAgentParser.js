"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsUserAgentParser = void 0;
/**
 * The User-Agent parser takes a User-Agent attribute and extracts the OS, browser, device, and other user data.
 * It recognizes major bots like the Google Bot, Yahoo Slurp, and Bing.
 */
class LogsUserAgentParser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsUserAgentParser.attributeTypeMap;
    }
}
exports.LogsUserAgentParser = LogsUserAgentParser;
/**
 * @ignore
 */
LogsUserAgentParser.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    isEncoded: {
        baseName: "is_encoded",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
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
        type: "LogsUserAgentParserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsUserAgentParser.js.map