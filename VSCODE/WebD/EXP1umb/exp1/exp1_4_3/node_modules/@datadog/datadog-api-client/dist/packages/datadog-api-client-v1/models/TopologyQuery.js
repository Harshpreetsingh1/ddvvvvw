"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologyQuery = void 0;
/**
 * Query to service-based topology data sources like the service map or data streams.
 */
class TopologyQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TopologyQuery.attributeTypeMap;
    }
}
exports.TopologyQuery = TopologyQuery;
/**
 * @ignore
 */
TopologyQuery.attributeTypeMap = {
    dataSource: {
        baseName: "data_source",
        type: "TopologyQueryDataSource",
    },
    filters: {
        baseName: "filters",
        type: "Array<string>",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TopologyQuery.js.map