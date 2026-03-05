"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsGrokParser = void 0;
/**
 * Create custom grok rules to parse the full message or [a specific attribute of your raw event](https://docs.datadoghq.com/logs/log_configuration/parsing/#advanced-settings).
 * For more information, see the [parsing section](https://docs.datadoghq.com/logs/log_configuration/parsing).
 */
class LogsGrokParser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsGrokParser.attributeTypeMap;
    }
}
exports.LogsGrokParser = LogsGrokParser;
/**
 * @ignore
 */
LogsGrokParser.attributeTypeMap = {
    grok: {
        baseName: "grok",
        type: "LogsGrokParserRules",
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
    samples: {
        baseName: "samples",
        type: "Array<string>",
    },
    source: {
        baseName: "source",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsGrokParserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsGrokParser.js.map