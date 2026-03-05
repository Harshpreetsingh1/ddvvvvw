"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APITriggerWrapper = void 0;
/**
 * Schema for an API-based trigger.
 */
class APITriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APITriggerWrapper.attributeTypeMap;
    }
}
exports.APITriggerWrapper = APITriggerWrapper;
/**
 * @ignore
 */
APITriggerWrapper.attributeTypeMap = {
    apiTrigger: {
        baseName: "apiTrigger",
        type: "APITrigger",
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
//# sourceMappingURL=APITriggerWrapper.js.map