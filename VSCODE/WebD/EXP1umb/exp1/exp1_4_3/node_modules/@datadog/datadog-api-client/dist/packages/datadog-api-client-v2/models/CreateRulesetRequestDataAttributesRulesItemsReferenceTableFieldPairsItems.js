"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems = void 0;
/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems` object.
 */
class CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap;
    }
}
exports.CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems = CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems;
/**
 * @ignore
 */
CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap = {
    inputColumn: {
        baseName: "input_column",
        type: "string",
        required: true,
    },
    outputKey: {
        baseName: "output_key",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems.js.map