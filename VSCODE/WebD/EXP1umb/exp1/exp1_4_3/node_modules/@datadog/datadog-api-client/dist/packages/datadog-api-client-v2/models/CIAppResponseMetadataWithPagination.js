"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppResponseMetadataWithPagination = void 0;
/**
 * The metadata associated with a request.
 */
class CIAppResponseMetadataWithPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppResponseMetadataWithPagination.attributeTypeMap;
    }
}
exports.CIAppResponseMetadataWithPagination = CIAppResponseMetadataWithPagination;
/**
 * @ignore
 */
CIAppResponseMetadataWithPagination.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "CIAppResponsePage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "CIAppResponseStatus",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<CIAppWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppResponseMetadataWithPagination.js.map