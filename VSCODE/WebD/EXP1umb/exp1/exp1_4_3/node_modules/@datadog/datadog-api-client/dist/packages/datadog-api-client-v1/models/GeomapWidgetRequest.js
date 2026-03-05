"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeomapWidgetRequest = void 0;
/**
 * An updated geomap widget.
 */
class GeomapWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeomapWidgetRequest.attributeTypeMap;
    }
}
exports.GeomapWidgetRequest = GeomapWidgetRequest;
/**
 * @ignore
 */
GeomapWidgetRequest.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<ListStreamColumn>",
    },
    conditionalFormats: {
        baseName: "conditional_formats",
        type: "Array<WidgetConditionalFormat>",
    },
    formulas: {
        baseName: "formulas",
        type: "Array<WidgetFormula>",
    },
    logQuery: {
        baseName: "log_query",
        type: "LogQueryDefinition",
    },
    q: {
        baseName: "q",
        type: "string",
    },
    queries: {
        baseName: "queries",
        type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    query: {
        baseName: "query",
        type: "ListStreamQuery",
    },
    responseFormat: {
        baseName: "response_format",
        type: "FormulaAndFunctionResponseFormat",
    },
    rumQuery: {
        baseName: "rum_query",
        type: "LogQueryDefinition",
    },
    securityQuery: {
        baseName: "security_query",
        type: "LogQueryDefinition",
    },
    sort: {
        baseName: "sort",
        type: "WidgetSortBy",
    },
    style: {
        baseName: "style",
        type: "GeomapWidgetRequestStyle",
    },
    textFormats: {
        baseName: "text_formats",
        type: "Array<TableWidgetTextFormatRule>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeomapWidgetRequest.js.map