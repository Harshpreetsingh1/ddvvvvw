"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksResponseMeta = void 0;
/**
 * Searches metadata returned by the API.
 */
class NotebooksResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebooksResponseMeta.attributeTypeMap;
    }
}
exports.NotebooksResponseMeta = NotebooksResponseMeta;
/**
 * @ignore
 */
NotebooksResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "NotebooksResponsePage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebooksResponseMeta.js.map