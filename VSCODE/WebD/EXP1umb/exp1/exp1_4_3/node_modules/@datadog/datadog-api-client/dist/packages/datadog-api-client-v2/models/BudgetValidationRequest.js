"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetValidationRequest = void 0;
class BudgetValidationRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetValidationRequest.attributeTypeMap;
    }
}
exports.BudgetValidationRequest = BudgetValidationRequest;
/**
 * @ignore
 */
BudgetValidationRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BudgetValidationRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetValidationRequest.js.map