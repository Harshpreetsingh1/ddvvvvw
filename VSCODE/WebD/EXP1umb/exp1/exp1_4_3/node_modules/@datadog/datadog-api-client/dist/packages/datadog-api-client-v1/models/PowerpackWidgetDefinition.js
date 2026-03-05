"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackWidgetDefinition = void 0;
/**
 * The powerpack widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
 */
class PowerpackWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackWidgetDefinition.attributeTypeMap;
    }
}
exports.PowerpackWidgetDefinition = PowerpackWidgetDefinition;
/**
 * @ignore
 */
PowerpackWidgetDefinition.attributeTypeMap = {
    backgroundColor: {
        baseName: "background_color",
        type: "string",
    },
    bannerImg: {
        baseName: "banner_img",
        type: "string",
    },
    powerpackId: {
        baseName: "powerpack_id",
        type: "string",
        required: true,
    },
    showTitle: {
        baseName: "show_title",
        type: "boolean",
    },
    templateVariables: {
        baseName: "template_variables",
        type: "PowerpackTemplateVariables",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "PowerpackWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackWidgetDefinition.js.map