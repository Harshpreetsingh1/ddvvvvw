"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetValidationResponseDataAttributes = void 0;
class BudgetValidationResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetValidationResponseDataAttributes.attributeTypeMap;
    }
}
exports.BudgetValidationResponseDataAttributes = BudgetValidationResponseDataAttributes;
/**
 * @ignore
 */
BudgetValidationResponseDataAttributes.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<string>",
    },
    valid: {
        baseName: "valid",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetValidationResponseDataAttributes.js.map