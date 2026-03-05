"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveBillingDimensionsAttributes = void 0;
/**
 * List of active billing dimensions.
 */
class ActiveBillingDimensionsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActiveBillingDimensionsAttributes.attributeTypeMap;
    }
}
exports.ActiveBillingDimensionsAttributes = ActiveBillingDimensionsAttributes;
/**
 * @ignore
 */
ActiveBillingDimensionsAttributes.attributeTypeMap = {
    month: {
        baseName: "month",
        type: "Date",
        format: "date-time",
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
//# sourceMappingURL=ActiveBillingDimensionsAttributes.js.map