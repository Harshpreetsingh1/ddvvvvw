"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionsResponseMeta = void 0;
/**
 * Connections response metadata.
 */
class ConnectionsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConnectionsResponseMeta.attributeTypeMap;
    }
}
exports.ConnectionsResponseMeta = ConnectionsResponseMeta;
/**
 * @ignore
 */
ConnectionsResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "ConnectionsPagePagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConnectionsResponseMeta.js.map