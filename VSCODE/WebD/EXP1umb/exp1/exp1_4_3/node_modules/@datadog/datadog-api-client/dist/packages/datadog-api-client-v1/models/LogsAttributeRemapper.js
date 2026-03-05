"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAttributeRemapper = void 0;
/**
 * The remapper processor remaps any source attribute(s) or tag to another target attribute or tag.
 * Constraints on the tag/attribute name are explained in the [Tag Best Practice documentation](https://docs.datadoghq.com/logs/guide/log-parsing-best-practice).
 * Some additional constraints are applied as `:` or `,` are not allowed in the target tag/attribute name.
 */
class LogsAttributeRemapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAttributeRemapper.attributeTypeMap;
    }
}
exports.LogsAttributeRemapper = LogsAttributeRemapper;
/**
 * @ignore
 */
LogsAttributeRemapper.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    overrideOnConflict: {
        baseName: "override_on_conflict",
        type: "boolean",
    },
    preserveSource: {
        baseName: "preserve_source",
        type: "boolean",
    },
    sourceType: {
        baseName: "source_type",
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
    targetFormat: {
        baseName: "target_format",
        type: "TargetFormatType",
    },
    targetType: {
        baseName: "target_type",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "LogsAttributeRemapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAttributeRemapper.js.map