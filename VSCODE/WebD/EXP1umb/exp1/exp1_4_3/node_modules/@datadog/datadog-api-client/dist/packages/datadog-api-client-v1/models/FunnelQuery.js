"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelQuery = void 0;
/**
 * Updated funnel widget.
 */
class FunnelQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FunnelQuery.attributeTypeMap;
    }
}
exports.FunnelQuery = FunnelQuery;
/**
 * @ignore
 */
FunnelQuery.attributeTypeMap = {
    dataSource: {
        baseName: "data_source",
        type: "FunnelSource",
        required: true,
    },
    queryString: {
        baseName: "query_string",
        type: "string",
        required: true,
    },
    steps: {
        baseName: "steps",
        type: "Array<FunnelStep>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FunnelQuery.js.map