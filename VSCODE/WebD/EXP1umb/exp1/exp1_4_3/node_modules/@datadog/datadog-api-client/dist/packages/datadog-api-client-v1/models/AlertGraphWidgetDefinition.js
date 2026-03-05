"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertGraphWidgetDefinition = void 0;
/**
 * Alert graphs are timeseries graphs showing the current status of any monitor defined on your system.
 */
class AlertGraphWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AlertGraphWidgetDefinition.attributeTypeMap;
    }
}
exports.AlertGraphWidgetDefinition = AlertGraphWidgetDefinition;
/**
 * @ignore
 */
AlertGraphWidgetDefinition.attributeTypeMap = {
    alertId: {
        baseName: "alert_id",
        type: "string",
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
        type: "AlertGraphWidgetDefinitionType",
        required: true,
    },
    vizType: {
        baseName: "viz_type",
        type: "WidgetVizType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AlertGraphWidgetDefinition.js.map