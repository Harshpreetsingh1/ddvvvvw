"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologyMapWidgetDefinition = void 0;
/**
 * This widget displays a topology of nodes and edges for different data sources. It replaces the service map widget.
 */
class TopologyMapWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TopologyMapWidgetDefinition.attributeTypeMap;
    }
}
exports.TopologyMapWidgetDefinition = TopologyMapWidgetDefinition;
/**
 * @ignore
 */
TopologyMapWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    requests: {
        baseName: "requests",
        type: "Array<TopologyRequest>",
        required: true,
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
        type: "TopologyMapWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TopologyMapWidgetDefinition.js.map