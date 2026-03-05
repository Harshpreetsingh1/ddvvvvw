"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerMetaPage = void 0;
/**
 * Paging attributes.
 */
class ContainerMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerMetaPage.attributeTypeMap;
    }
}
exports.ContainerMetaPage = ContainerMetaPage;
/**
 * @ignore
 */
ContainerMetaPage.attributeTypeMap = {
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
        type: "ContainerMetaPageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerMetaPage.js.map