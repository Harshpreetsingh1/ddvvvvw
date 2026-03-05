"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTemplateVariablePreset = void 0;
/**
 * Template variables saved views.
 */
class DashboardTemplateVariablePreset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardTemplateVariablePreset.attributeTypeMap;
    }
}
exports.DashboardTemplateVariablePreset = DashboardTemplateVariablePreset;
/**
 * @ignore
 */
DashboardTemplateVariablePreset.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    templateVariables: {
        baseName: "template_variables",
        type: "Array<DashboardTemplateVariablePresetValue>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardTemplateVariablePreset.js.map