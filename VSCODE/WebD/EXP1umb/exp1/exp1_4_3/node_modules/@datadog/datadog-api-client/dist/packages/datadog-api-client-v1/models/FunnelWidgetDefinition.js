"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelWidgetDefinition = void 0;
/**
 * The funnel visualization displays a funnel of user sessions that maps a sequence of view navigation and user interaction in your application.
 */
class FunnelWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FunnelWidgetDefinition.attributeTypeMap;
    }
}
exports.FunnelWidgetDefinition = FunnelWidgetDefinition;
/**
 * @ignore
 */
FunnelWidgetDefinition.attributeTypeMap = {
    requests: {
        baseName: "requests",
        type: "[FunnelWidgetRequest]",
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
        type: "FunnelWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FunnelWidgetDefinition.js.map