"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetValidationRequestData = void 0;
class BudgetValidationRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetValidationRequestData.attributeTypeMap;
    }
}
exports.BudgetValidationRequestData = BudgetValidationRequestData;
/**
 * @ignore
 */
BudgetValidationRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BudgetWithEntriesDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "BudgetWithEntriesDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetValidationRequestData.js.map