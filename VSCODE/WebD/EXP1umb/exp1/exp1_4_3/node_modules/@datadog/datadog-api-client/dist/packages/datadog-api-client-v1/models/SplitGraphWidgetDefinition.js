"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitGraphWidgetDefinition = void 0;
/**
 * The split graph widget allows you to create repeating units of a graph - one for each value in a group (for example: one per service)
 */
class SplitGraphWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitGraphWidgetDefinition.attributeTypeMap;
    }
}
exports.SplitGraphWidgetDefinition = SplitGraphWidgetDefinition;
/**
 * @ignore
 */
SplitGraphWidgetDefinition.attributeTypeMap = {
    hasUniformYAxes: {
        baseName: "has_uniform_y_axes",
        type: "boolean",
    },
    size: {
        baseName: "size",
        type: "SplitGraphVizSize",
        required: true,
    },
    sourceWidgetDefinition: {
        baseName: "source_widget_definition",
        type: "SplitGraphSourceWidgetDefinition",
        required: true,
    },
    splitConfig: {
        baseName: "split_config",
        type: "SplitConfig",
        required: true,
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SplitGraphWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitGraphWidgetDefinition.js.map