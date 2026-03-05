"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APITrigger = void 0;
/**
 * Trigger a workflow from an API request. The workflow must be published.
 */
class APITrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APITrigger.attributeTypeMap;
    }
}
exports.APITrigger = APITrigger;
/**
 * @ignore
 */
APITrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APITrigger.js.map