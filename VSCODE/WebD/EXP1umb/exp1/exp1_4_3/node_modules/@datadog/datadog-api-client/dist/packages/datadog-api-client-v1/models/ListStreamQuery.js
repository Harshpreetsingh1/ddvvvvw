"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStreamQuery = void 0;
/**
 * Updated list stream widget.
 */
class ListStreamQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListStreamQuery.attributeTypeMap;
    }
}
exports.ListStreamQuery = ListStreamQuery;
/**
 * @ignore
 */
ListStreamQuery.attributeTypeMap = {
    clusteringPatternFieldPath: {
        baseName: "clustering_pattern_field_path",
        type: "string",
    },
    compute: {
        baseName: "compute",
        type: "Array<ListStreamComputeItems>",
    },
    dataSource: {
        baseName: "data_source",
        type: "ListStreamSource",
        required: true,
    },
    eventSize: {
        baseName: "event_size",
        type: "WidgetEventSize",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<ListStreamGroupByItems>",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    queryString: {
        baseName: "query_string",
        type: "string",
        required: true,
    },
    sort: {
        baseName: "sort",
        type: "WidgetFieldSort",
    },
    storage: {
        baseName: "storage",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListStreamQuery.js.map