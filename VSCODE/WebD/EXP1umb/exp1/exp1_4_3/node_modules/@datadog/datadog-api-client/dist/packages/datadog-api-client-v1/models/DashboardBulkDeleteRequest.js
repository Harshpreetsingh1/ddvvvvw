"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardBulkDeleteRequest = void 0;
/**
 * Dashboard bulk delete request body.
 */
class DashboardBulkDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardBulkDeleteRequest.attributeTypeMap;
    }
}
exports.DashboardBulkDeleteRequest = DashboardBulkDeleteRequest;
/**
 * @ignore
 */
DashboardBulkDeleteRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DashboardBulkActionData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardBulkDeleteRequest.js.map