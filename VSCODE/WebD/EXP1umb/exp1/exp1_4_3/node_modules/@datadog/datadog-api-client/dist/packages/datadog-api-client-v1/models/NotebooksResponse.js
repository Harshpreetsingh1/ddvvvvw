"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksResponse = void 0;
/**
 * Notebooks get all response.
 */
class NotebooksResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebooksResponse.attributeTypeMap;
    }
}
exports.NotebooksResponse = NotebooksResponse;
/**
 * @ignore
 */
NotebooksResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<NotebooksResponseData>",
    },
    meta: {
        baseName: "meta",
        type: "NotebooksResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebooksResponse.js.map