"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunWorkflowWidgetDefinition = void 0;
/**
 * Run workflow is widget that allows you to run a workflow from a dashboard.
 */
class RunWorkflowWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RunWorkflowWidgetDefinition.attributeTypeMap;
    }
}
exports.RunWorkflowWidgetDefinition = RunWorkflowWidgetDefinition;
/**
 * @ignore
 */
RunWorkflowWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    inputs: {
        baseName: "inputs",
        type: "Array<RunWorkflowWidgetInput>",
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
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
        type: "RunWorkflowWidgetDefinitionType",
        required: true,
    },
    workflowId: {
        baseName: "workflow_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RunWorkflowWidgetDefinition.js.map