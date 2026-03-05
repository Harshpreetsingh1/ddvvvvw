"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTrigger = void 0;
/**
 * Trigger a workflow from a Case. For automatic triggering a handle must be configured and the workflow must be published.
 */
class CaseTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTrigger.attributeTypeMap;
    }
}
exports.CaseTrigger = CaseTrigger;
/**
 * @ignore
 */
CaseTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTrigger.js.map