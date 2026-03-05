"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryRuleResponseArray = void 0;
/**
 * The definition of `ArbitraryRuleResponseArray` object.
 */
class ArbitraryRuleResponseArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryRuleResponseArray.attributeTypeMap;
    }
}
exports.ArbitraryRuleResponseArray = ArbitraryRuleResponseArray;
/**
 * @ignore
 */
ArbitraryRuleResponseArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ArbitraryRuleResponseData>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "ArbitraryRuleResponseArrayMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryRuleResponseArray.js.map