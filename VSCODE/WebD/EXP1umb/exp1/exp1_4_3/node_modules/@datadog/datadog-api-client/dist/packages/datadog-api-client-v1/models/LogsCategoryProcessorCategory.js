"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsCategoryProcessorCategory = void 0;
/**
 * Object describing the logs filter.
 */
class LogsCategoryProcessorCategory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsCategoryProcessorCategory.attributeTypeMap;
    }
}
exports.LogsCategoryProcessorCategory = LogsCategoryProcessorCategory;
/**
 * @ignore
 */
LogsCategoryProcessorCategory.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "LogsFilter",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsCategoryProcessorCategory.js.map