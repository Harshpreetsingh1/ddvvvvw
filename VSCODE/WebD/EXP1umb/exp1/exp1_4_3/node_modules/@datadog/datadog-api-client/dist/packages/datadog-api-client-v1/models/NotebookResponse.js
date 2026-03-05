"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookResponse = void 0;
/**
 * The description of a notebook response.
 */
class NotebookResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookResponse.attributeTypeMap;
    }
}
exports.NotebookResponse = NotebookResponse;
/**
 * @ignore
 */
NotebookResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NotebookResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookResponse.js.map