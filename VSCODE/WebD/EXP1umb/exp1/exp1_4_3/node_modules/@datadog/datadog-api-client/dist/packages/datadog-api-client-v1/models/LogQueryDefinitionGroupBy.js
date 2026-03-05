"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogQueryDefinitionGroupBy = void 0;
/**
 * Defined items in the group.
 */
class LogQueryDefinitionGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogQueryDefinitionGroupBy.attributeTypeMap;
    }
}
exports.LogQueryDefinitionGroupBy = LogQueryDefinitionGroupBy;
/**
 * @ignore
 */
LogQueryDefinitionGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    sort: {
        baseName: "sort",
        type: "LogQueryDefinitionGroupBySort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogQueryDefinitionGroupBy.js.map