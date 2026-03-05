"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsTraceRemapper = void 0;
/**
 * There are two ways to improve correlation between application traces and logs.
 *
 *   1. Follow the documentation on [how to inject a trace ID in the application logs](https://docs.datadoghq.com/tracing/connect_logs_and_traces)
 *   and by default log integrations take care of all the rest of the setup.
 *
 *   2. Use the Trace remapper processor to define a log attribute as its associated trace ID.
 */
class LogsTraceRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsTraceRemapper.attributeTypeMap;
    }
}
exports.LogsTraceRemapper = LogsTraceRemapper;
/**
 * @ignore
 */
LogsTraceRemapper.attributeTypeMap = {
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
        type: "LogsTraceRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsTraceRemapper.js.map