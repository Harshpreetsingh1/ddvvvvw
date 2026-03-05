"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOListWidgetDefinition = void 0;
/**
 * Use the SLO List widget to track your SLOs (Service Level Objectives) on dashboards.
 */
class SLOListWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOListWidgetDefinition.attributeTypeMap;
    }
}
exports.SLOListWidgetDefinition = SLOListWidgetDefinition;
/**
 * @ignore
 */
SLOListWidgetDefinition.attributeTypeMap = {
    requests: {
        baseName: "requests",
        type: "[SLOListWidgetRequest]",
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
        type: "SLOListWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOListWidgetDefinition.js.map