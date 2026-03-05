"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRestoreRequest = void 0;
/**
 * Dashboard restore request body.
 */
class DashboardRestoreRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardRestoreRequest.attributeTypeMap;
    }
}
exports.DashboardRestoreRequest = DashboardRestoreRequest;
/**
 * @ignore
 */
DashboardRestoreRequest.attributeTypeMap = {
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
//# sourceMappingURL=DashboardRestoreRequest.js.map