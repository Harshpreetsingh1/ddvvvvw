"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems = void 0;
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems` object.
 */
class ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems.attributeTypeMap;
    }
}
exports.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems = ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems;
/**
 * @ignore
 */
ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems.attributeTypeMap = {
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
//# sourceMappingURL=ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems.js.map