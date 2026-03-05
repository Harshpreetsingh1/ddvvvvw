"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackTemplateVariables = void 0;
/**
 * Powerpack template variables.
 */
class PowerpackTemplateVariables {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackTemplateVariables.attributeTypeMap;
    }
}
exports.PowerpackTemplateVariables = PowerpackTemplateVariables;
/**
 * @ignore
 */
PowerpackTemplateVariables.attributeTypeMap = {
    controlledByPowerpack: {
        baseName: "controlled_by_powerpack",
        type: "Array<PowerpackTemplateVariableContents>",
    },
    controlledExternally: {
        baseName: "controlled_externally",
        type: "Array<PowerpackTemplateVariableContents>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackTemplateVariables.js.map