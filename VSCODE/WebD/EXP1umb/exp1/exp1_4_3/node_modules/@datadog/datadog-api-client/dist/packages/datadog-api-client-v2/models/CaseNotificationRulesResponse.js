"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRulesResponse = void 0;
/**
 * Response with notification rules
 */
class CaseNotificationRulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRulesResponse.attributeTypeMap;
    }
}
exports.CaseNotificationRulesResponse = CaseNotificationRulesResponse;
/**
 * @ignore
 */
CaseNotificationRulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CaseNotificationRule>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRulesResponse.js.map