"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOListWidgetQuery = void 0;
/**
 * Updated SLO List widget.
 */
class SLOListWidgetQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOListWidgetQuery.attributeTypeMap;
    }
}
exports.SLOListWidgetQuery = SLOListWidgetQuery;
/**
 * @ignore
 */
SLOListWidgetQuery.attributeTypeMap = {
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    queryString: {
        baseName: "query_string",
        type: "string",
        required: true,
    },
    sort: {
        baseName: "sort",
        type: "Array<WidgetFieldSort>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOListWidgetQuery.js.map