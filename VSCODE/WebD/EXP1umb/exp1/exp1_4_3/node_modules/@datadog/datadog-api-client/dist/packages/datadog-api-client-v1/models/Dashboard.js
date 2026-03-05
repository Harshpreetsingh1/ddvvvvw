"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
/**
 * A dashboard is Datadog’s tool for visually tracking, analyzing, and displaying
 * key performance metrics, which enable you to monitor the health of your infrastructure.
 */
class Dashboard {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Dashboard.attributeTypeMap;
    }
}
exports.Dashboard = Dashboard;
/**
 * @ignore
 */
Dashboard.attributeTypeMap = {
    authorHandle: {
        baseName: "author_handle",
        type: "string",
    },
    authorName: {
        baseName: "author_name",
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
        required: true,
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    notifyList: {
        baseName: "notify_list",
        type: "Array<string>",
    },
    reflowType: {
        baseName: "reflow_type",
        type: "DashboardReflowType",
    },
    restrictedRoles: {
        baseName: "restricted_roles",
        type: "Array<string>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    templateVariablePresets: {
        baseName: "template_variable_presets",
        type: "Array<DashboardTemplateVariablePreset>",
    },
    templateVariables: {
        baseName: "template_variables",
        type: "Array<DashboardTemplateVariable>",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
    },
    widgets: {
        baseName: "widgets",
        type: "Array<Widget>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Dashboard.js.map