"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogQueryDefinition = void 0;
/**
 * The log query.
 */
class LogQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogQueryDefinition.attributeTypeMap;
    }
}
exports.LogQueryDefinition = LogQueryDefinition;
/**
 * @ignore
 */
LogQueryDefinition.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "LogsQueryCompute",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<LogQueryDefinitionGroupBy>",
    },
    index: {
        baseName: "index",
        type: "string",
    },
    multiCompute: {
        baseName: "multi_compute",
        type: "Array<LogsQueryCompute>",
    },
    search: {
        baseName: "search",
        type: "LogQueryDefinitionSearch",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogQueryDefinition.js.map