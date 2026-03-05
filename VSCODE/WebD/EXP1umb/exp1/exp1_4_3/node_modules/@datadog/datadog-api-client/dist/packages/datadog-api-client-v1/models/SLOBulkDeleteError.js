"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOBulkDeleteError = void 0;
/**
 * Object describing the error.
 */
class SLOBulkDeleteError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOBulkDeleteError.attributeTypeMap;
    }
}
exports.SLOBulkDeleteError = SLOBulkDeleteError;
/**
 * @ignore
 */
SLOBulkDeleteError.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    timeframe: {
        baseName: "timeframe",
        type: "SLOErrorTimeframe",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOBulkDeleteError.js.map