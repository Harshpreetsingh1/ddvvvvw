"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsPipeline = void 0;
/**
 * Pipelines and processors operate on incoming logs,
 * parsing and transforming them into structured attributes for easier querying.
 *
 * **Note**: These endpoints are only available for admin users.
 * Make sure to use an application key created by an admin.
 */
class LogsPipeline {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsPipeline.attributeTypeMap;
    }
}
exports.LogsPipeline = LogsPipeline;
/**
 * @ignore
 */
LogsPipeline.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    filter: {
        baseName: "filter",
        type: "LogsFilter",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    isReadOnly: {
        baseName: "is_read_only",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    processors: {
        baseName: "processors",
        type: "Array<LogsProcessor>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsPipeline.js.map