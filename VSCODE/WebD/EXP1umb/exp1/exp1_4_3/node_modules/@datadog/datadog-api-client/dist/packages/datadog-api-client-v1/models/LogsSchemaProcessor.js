"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaProcessor = void 0;
/**
 * A processor that has additional validations and checks for a given schema. Currently supported schema types include OCSF.
 */
class LogsSchemaProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaProcessor.attributeTypeMap;
    }
}
exports.LogsSchemaProcessor = LogsSchemaProcessor;
/**
 * @ignore
 */
LogsSchemaProcessor.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    mappers: {
        baseName: "mappers",
        type: "Array<LogsSchemaMapper>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    schema: {
        baseName: "schema",
        type: "LogsSchemaData",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsSchemaProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsSchemaProcessor.js.map