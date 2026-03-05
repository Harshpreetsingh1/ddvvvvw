"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems = void 0;
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems` object.
 */
class ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems.attributeTypeMap;
    }
}
exports.ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems = ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems;
/**
 * @ignore
 */
ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems.attributeTypeMap = {
    condition: {
        baseName: "condition",
        type: "string",
        required: true,
    },
    tag: {
        baseName: "tag",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
    },
    values: {
        baseName: "values",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems.js.map