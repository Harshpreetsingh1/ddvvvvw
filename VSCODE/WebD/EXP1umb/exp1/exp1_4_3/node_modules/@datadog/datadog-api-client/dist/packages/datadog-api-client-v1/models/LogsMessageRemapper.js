"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsMessageRemapper = void 0;
/**
 * The message is a key attribute in Datadog.
 * It is displayed in the message column of the Log Explorer and you can do full string search on it.
 * Use this Processor to define one or more attributes as the official log message.
 *
 * **Note:** If multiple log message remapper processors can be applied to a given log,
 * only the first one (according to the pipeline order) is taken into account.
 */
class LogsMessageRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsMessageRemapper.attributeTypeMap;
    }
}
exports.LogsMessageRemapper = LogsMessageRemapper;
/**
 * @ignore
 */
LogsMessageRemapper.attributeTypeMap = {
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
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsMessageRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsMessageRemapper.js.map