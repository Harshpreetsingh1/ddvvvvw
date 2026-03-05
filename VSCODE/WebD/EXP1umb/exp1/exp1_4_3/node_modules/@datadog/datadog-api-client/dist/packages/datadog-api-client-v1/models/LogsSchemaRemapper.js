"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaRemapper = void 0;
/**
 * The schema remapper maps source log fields to their correct fields.
 */
class LogsSchemaRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaRemapper.attributeTypeMap;
    }
}
exports.LogsSchemaRemapper = LogsSchemaRemapper;
/**
 * @ignore
 */
LogsSchemaRemapper.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    overrideOnConflict: {
        baseName: "override_on_conflict",
        type: "boolean",
    },
    preserveSource: {
        baseName: "preserve_source",
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
    targetFormat: {
        baseName: "target_format",
        type: "TargetFormatType",
    },
    type: {
        baseName: "type",
        type: "LogsSchemaRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsSchemaRemapper.js.map