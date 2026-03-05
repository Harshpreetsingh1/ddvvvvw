"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestDataAttributesRulesItemsQueryAddition = void 0;
/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsQueryAddition` object.
 */
class CreateRulesetRequestDataAttributesRulesItemsQueryAddition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestDataAttributesRulesItemsQueryAddition.attributeTypeMap;
    }
}
exports.CreateRulesetRequestDataAttributesRulesItemsQueryAddition = CreateRulesetRequestDataAttributesRulesItemsQueryAddition;
/**
 * @ignore
 */
CreateRulesetRequestDataAttributesRulesItemsQueryAddition.attributeTypeMap = {
    key: {
        baseName: "key",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestDataAttributesRulesItemsQueryAddition.js.map