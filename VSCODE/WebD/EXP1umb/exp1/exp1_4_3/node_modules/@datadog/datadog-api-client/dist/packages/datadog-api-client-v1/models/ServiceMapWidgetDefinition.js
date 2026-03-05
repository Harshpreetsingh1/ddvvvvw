"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceMapWidgetDefinition = void 0;
/**
 * This widget displays a map of a service to all of the services that call it, and all of the services that it calls.
 */
class ServiceMapWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceMapWidgetDefinition.attributeTypeMap;
    }
}
exports.ServiceMapWidgetDefinition = ServiceMapWidgetDefinition;
/**
 * @ignore
 */
ServiceMapWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    filters: {
        baseName: "filters",
        type: "Array<string>",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
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
        type: "ServiceMapWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceMapWidgetDefinition.js.map