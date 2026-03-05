"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardBulkActionData = void 0;
/**
 * Dashboard bulk action request data.
 */
class DashboardBulkActionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardBulkActionData.attributeTypeMap;
    }
}
exports.DashboardBulkActionData = DashboardBulkActionData;
/**
 * @ignore
 */
DashboardBulkActionData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DashboardResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardBulkActionData.js.map