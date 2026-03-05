"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryRuleResponseArrayMeta = void 0;
/**
 * The `ArbitraryRuleResponseArray` `meta`.
 */
class ArbitraryRuleResponseArrayMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryRuleResponseArrayMeta.attributeTypeMap;
    }
}
exports.ArbitraryRuleResponseArrayMeta = ArbitraryRuleResponseArrayMeta;
/**
 * @ignore
 */
ArbitraryRuleResponseArrayMeta.attributeTypeMap = {
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryRuleResponseArrayMeta.js.map