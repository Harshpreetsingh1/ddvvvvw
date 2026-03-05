"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppResponseMetadata = void 0;
/**
 * The metadata associated with a request.
 */
class CIAppResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppResponseMetadata.attributeTypeMap;
    }
}
exports.CIAppResponseMetadata = CIAppResponseMetadata;
/**
 * @ignore
 */
CIAppResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=CIAppResponseMetadata.js.map