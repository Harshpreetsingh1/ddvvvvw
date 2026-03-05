"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaCategoryMapper = void 0;
/**
 * Use the Schema Category Mapper to categorize log event into enum fields.
 * In the case of OCSF, they can be used to map sibling fields which are composed of an ID and a name.
 *
 * **Notes**:
 *
 * - The syntax of the query is the one of Logs Explorer search bar.
 *   The query can be done on any log attribute or tag, whether it is a facet or not.
 *   Wildcards can also be used inside your query.
 * - Categories are executed in order and processing stops at the first match.
 *   Make sure categories are properly ordered in case a log could match multiple queries.
 * - Sibling fields always have a numerical ID field and a human-readable string name.
 * - A fallback section handles cases where the name or ID value matches a specific value.
 *   If the name matches "Other" or the ID matches 99, the value of the sibling name field will be pulled from a source field from the original log.
 */
class LogsSchemaCategoryMapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaCategoryMapper.attributeTypeMap;
    }
}
exports.LogsSchemaCategoryMapper = LogsSchemaCategoryMapper;
/**
 * @ignore
 */
LogsSchemaCategoryMapper.attributeTypeMap = {
    categories: {
        baseName: "categories",
        type: "Array<LogsSchemaCategoryMapperCategory>",
        required: true,
    },
    fallback: {
        baseName: "fallback",
        type: "LogsSchemaCategoryMapperFallback",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    targets: {
        baseName: "targets",
        type: "LogsSchemaCategoryMapperTargets",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsSchemaCategoryMapperType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsSchemaCategoryMapper.js.map