"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStreamWidgetRequest = void 0;
/**
 * Updated list stream widget.
 */
class ListStreamWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListStreamWidgetRequest.attributeTypeMap;
    }
}
exports.ListStreamWidgetRequest = ListStreamWidgetRequest;
/**
 * @ignore
 */
ListStreamWidgetRequest.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<ListStreamColumn>",
        required: true,
    },
    query: {
        baseName: "query",
        type: "ListStreamQuery",
        required: true,
    },
    responseFormat: {
        baseName: "response_format",
        type: "ListStreamResponseFormat",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListStreamWidgetRequest.js.map