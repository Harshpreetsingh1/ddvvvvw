"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOBulkDeleteResponse = void 0;
/**
 * The bulk partial delete service level objective object endpoint
 * response.
 *
 * This endpoint operates on multiple service level objective objects, so
 * it may be partially successful. In such cases, the "data" and "error"
 * fields in this response indicate which deletions succeeded and failed.
 */
class SLOBulkDeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOBulkDeleteResponse.attributeTypeMap;
    }
}
exports.SLOBulkDeleteResponse = SLOBulkDeleteResponse;
/**
 * @ignore
 */
SLOBulkDeleteResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOBulkDeleteResponseData",
    },
    errors: {
        baseName: "errors",
        type: "Array<SLOBulkDeleteError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOBulkDeleteResponse.js.map