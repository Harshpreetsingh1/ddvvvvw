"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryRuleResponseData = void 0;
/**
 * The definition of `ArbitraryRuleResponseData` object.
 */
class ArbitraryRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryRuleResponseData.attributeTypeMap;
    }
}
exports.ArbitraryRuleResponseData = ArbitraryRuleResponseData;
/**
 * @ignore
 */
ArbitraryRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ArbitraryRuleResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ArbitraryRuleResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryRuleResponseData.js.map