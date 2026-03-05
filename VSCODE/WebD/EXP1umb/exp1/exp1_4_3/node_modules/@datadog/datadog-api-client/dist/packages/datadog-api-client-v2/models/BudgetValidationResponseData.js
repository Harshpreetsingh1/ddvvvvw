"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetValidationResponseData = void 0;
class BudgetValidationResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetValidationResponseData.attributeTypeMap;
    }
}
exports.BudgetValidationResponseData = BudgetValidationResponseData;
/**
 * @ignore
 */
BudgetValidationResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BudgetValidationResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "BudgetValidationResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetValidationResponseData.js.map