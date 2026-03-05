"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageMetaPage = void 0;
/**
 * Paging attributes.
 */
class ContainerImageMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageMetaPage.attributeTypeMap;
    }
}
exports.ContainerImageMetaPage = ContainerImageMetaPage;
/**
 * @ignore
 */
ContainerImageMetaPage.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    nextCursor: {
        baseName: "next_cursor",
        type: "string",
    },
    prevCursor: {
        baseName: "prev_cursor",
        type: "string",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "ContainerImageMetaPageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageMetaPage.js.map