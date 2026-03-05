"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTriggerWrapper = void 0;
/**
 * Schema for a Case-based trigger.
 */
class CaseTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTriggerWrapper.attributeTypeMap;
    }
}
exports.CaseTriggerWrapper = CaseTriggerWrapper;
/**
 * @ignore
 */
CaseTriggerWrapper.attributeTypeMap = {
    caseTrigger: {
        baseName: "caseTrigger",
        type: "CaseTrigger",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTriggerWrapper.js.map