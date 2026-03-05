"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaCategoryMapperCategory = void 0;
/**
 * Object describing the logs filter with corresponding category ID and name assignment.
 */
class LogsSchemaCategoryMapperCategory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaCategoryMapperCategory.attributeTypeMap;
    }
}
exports.LogsSchemaCategoryMapperCategory = LogsSchemaCategoryMapperCategory;
/**
 * @ignore
 */
LogsSchemaCategoryMapperCategory.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "LogsFilter",
        required: true,
    },
    id: {
        baseName: "id",
        type: "number",
        required: true,
        format: "int64",
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
//# sourceMappingURL=LogsSchemaCategoryMapperCategory.js.map