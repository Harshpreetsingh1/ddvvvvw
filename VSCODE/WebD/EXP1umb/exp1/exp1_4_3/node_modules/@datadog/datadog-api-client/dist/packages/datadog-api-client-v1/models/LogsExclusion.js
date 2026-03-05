"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsExclusion = void 0;
/**
 * Represents the index exclusion filter object from configuration API.
 */
class LogsExclusion {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsExclusion.attributeTypeMap;
    }
}
exports.LogsExclusion = LogsExclusion;
/**
 * @ignore
 */
LogsExclusion.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "LogsExclusionFilter",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsExclusion.js.map