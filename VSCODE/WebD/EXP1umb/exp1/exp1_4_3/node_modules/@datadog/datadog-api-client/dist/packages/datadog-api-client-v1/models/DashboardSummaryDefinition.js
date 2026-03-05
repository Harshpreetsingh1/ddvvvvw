"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSummaryDefinition = void 0;
/**
 * Dashboard definition.
 */
class DashboardSummaryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardSummaryDefinition.attributeTypeMap;
    }
}
exports.DashboardSummaryDefinition = DashboardSummaryDefinition;
/**
 * @ignore
 */
DashboardSummaryDefinition.attributeTypeMap = {
    authorHandle: {
        baseName: "author_handle",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    isReadOnly: {
        baseName: "is_read_only",
        type: "boolean",
    },
    layoutType: {
        baseName: "layout_type",
        type: "DashboardLayoutType",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardSummaryDefinition.js.map