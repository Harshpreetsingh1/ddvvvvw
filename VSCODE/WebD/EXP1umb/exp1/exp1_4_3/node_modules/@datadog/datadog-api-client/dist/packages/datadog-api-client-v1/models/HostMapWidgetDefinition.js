"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMapWidgetDefinition = void 0;
/**
 * The host map widget graphs any metric across your hosts using the same visualization available from the main Host Map page.
 */
class HostMapWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMapWidgetDefinition.attributeTypeMap;
    }
}
exports.HostMapWidgetDefinition = HostMapWidgetDefinition;
/**
 * @ignore
 */
HostMapWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    group: {
        baseName: "group",
        type: "Array<string>",
    },
    noGroupHosts: {
        baseName: "no_group_hosts",
        type: "boolean",
    },
    noMetricHosts: {
        baseName: "no_metric_hosts",
        type: "boolean",
    },
    nodeType: {
        baseName: "node_type",
        type: "WidgetNodeType",
    },
    notes: {
        baseName: "notes",
        type: "string",
    },
    requests: {
        baseName: "requests",
        type: "HostMapWidgetDefinitionRequests",
        required: true,
    },
    scope: {
        baseName: "scope",
        type: "Array<string>",
    },
    style: {
        baseName: "style",
        type: "HostMapWidgetDefinitionStyle",
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
        type: "HostMapWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMapWidgetDefinition.js.map