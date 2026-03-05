"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCreateRequest = void 0;
/**
 * The description of a notebook create request.
 */
class NotebookCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCreateRequest.attributeTypeMap;
    }
}
exports.NotebookCreateRequest = NotebookCreateRequest;
/**
 * @ignore
 */
NotebookCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NotebookCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookCreateRequest.js.map