"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSpanRemapper = void 0;
/**
 * There are two ways to define correlation between application spans and logs:
 *
 *   1. Follow the documentation on [how to inject a span ID in the application logs](https://docs.datadoghq.com/tracing/connect_logs_and_traces).
 *   Log integrations automatically handle all remaining setup steps by default.
 *
 *   2. Use the span remapper processor to define a log attribute as its associated span ID.
 */
class LogsSpanRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSpanRemapper.attributeTypeMap;
    }
}
exports.LogsSpanRemapper = LogsSpanRemapper;
/**
 * @ignore
 */
LogsSpanRemapper.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "LogsSpanRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsSpanRemapper.js.map