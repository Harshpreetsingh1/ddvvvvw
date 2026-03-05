"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertValueWidgetDefinition = void 0;
/**
 * Alert values are query values showing the current value of the metric in any monitor defined on your system.
 */
class AlertValueWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AlertValueWidgetDefinition.attributeTypeMap;
    }
}
exports.AlertValueWidgetDefinition = AlertValueWidgetDefinition;
/**
 * @ignore
 */
AlertValueWidgetDefinition.attributeTypeMap = {
    alertId: {
        baseName: "alert_id",
        type: "string",
        required: true,
    },
    precision: {
        baseName: "precision",
        type: "number",
        format: "int64",
    },
    textAlign: {
        baseName: "text_align",
        type: "WidgetTextAlign",
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
        type: "AlertValueWidgetDefinitionType",
        required: true,
    },
    unit: {
        baseName: "unit",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AlertValueWidgetDefinition.js.map