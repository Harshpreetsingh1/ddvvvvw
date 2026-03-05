"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCreateData = void 0;
/**
 * The data for a notebook create request.
 */
class NotebookCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCreateData.attributeTypeMap;
    }
}
exports.NotebookCreateData = NotebookCreateData;
/**
 * @ignore
 */
NotebookCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebookCreateDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotebookResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookCreateData.js.map