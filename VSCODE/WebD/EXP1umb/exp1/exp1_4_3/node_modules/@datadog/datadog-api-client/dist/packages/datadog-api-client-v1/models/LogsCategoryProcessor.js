"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsCategoryProcessor = void 0;
/**
 * Use the Category Processor to add a new attribute (without spaces or special characters in the new attribute name)
 * to a log matching a provided search query. Use categories to create groups for an analytical view.
 * For example, URL groups, machine groups, environments, and response time buckets.
 *
 * **Notes**:
 *
 * - The syntax of the query is the one of Logs Explorer search bar.
 *   The query can be done on any log attribute or tag, whether it is a facet or not.
 *   Wildcards can also be used inside your query.
 * - Once the log has matched one of the Processor queries, it stops.
 *   Make sure they are properly ordered in case a log could match several queries.
 * - The names of the categories must be unique.
 * - Once defined in the Category Processor, you can map categories to log status using the Log Status Remapper.
 */
class LogsCategoryProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsCategoryProcessor.attributeTypeMap;
    }
}
exports.LogsCategoryProcessor = LogsCategoryProcessor;
/**
 * @ignore
 */
LogsCategoryProcessor.attributeTypeMap = {
    categories: {
        baseName: "categories",
        type: "Array<LogsCategoryProcessorCategory>",
        required: true,
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsCategoryProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsCategoryProcessor.js.map