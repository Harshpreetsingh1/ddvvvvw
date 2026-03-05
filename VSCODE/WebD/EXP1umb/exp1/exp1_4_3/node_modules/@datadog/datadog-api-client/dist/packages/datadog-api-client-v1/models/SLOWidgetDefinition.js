"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOWidgetDefinition = void 0;
/**
 * Use the SLO and uptime widget to track your SLOs (Service Level Objectives) and uptime on screenboards and timeboards.
 */
class SLOWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOWidgetDefinition.attributeTypeMap;
    }
}
exports.SLOWidgetDefinition = SLOWidgetDefinition;
/**
 * @ignore
 */
SLOWidgetDefinition.attributeTypeMap = {
    additionalQueryFilters: {
        baseName: "additional_query_filters",
        type: "string",
    },
    globalTimeTarget: {
        baseName: "global_time_target",
        type: "string",
    },
    showErrorBudget: {
        baseName: "show_error_budget",
        type: "boolean",
    },
    sloId: {
        baseName: "slo_id",
        type: "string",
    },
    timeWindows: {
        baseName: "time_windows",
        type: "Array<WidgetTimeWindows>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    titleAlign: {
        baseName: "title_align",
        type: "WidgetTextAlign",
    },
    titleSize: {
        baseName: "title_size",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SLOWidgetDefinitionType",
        required: true,
    },
    viewMode: {
        baseName: "view_mode",
        type: "WidgetViewMode",
    },
    viewType: {
        baseName: "view_type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOWidgetDefinition.js.map