"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToplistWidgetDefinition = void 0;
/**
 * The top list visualization enables you to display a list of Tag value like hostname or service with the most or least of any metric value, such as highest consumers of CPU, hosts with the least disk space, etc.
 */
class ToplistWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ToplistWidgetDefinition.attributeTypeMap;
    }
}
exports.ToplistWidgetDefinition = ToplistWidgetDefinition;
/**
 * @ignore
 */
ToplistWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    requests: {
        baseName: "requests",
        type: "Array<ToplistWidgetRequest>",
        required: true,
    },
    style: {
        baseName: "style",
        type: "ToplistWidgetStyle",
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
        type: "ToplistWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ToplistWidgetDefinition.js.map