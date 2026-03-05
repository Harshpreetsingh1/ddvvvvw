"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRestrictionPolicyBinding = void 0;
/**
 * Objects describing the binding used for a mobile test.
 */
class SyntheticsTestRestrictionPolicyBinding {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestRestrictionPolicyBinding.attributeTypeMap;
    }
}
exports.SyntheticsTestRestrictionPolicyBinding = SyntheticsTestRestrictionPolicyBinding;
/**
 * @ignore
 */
SyntheticsTestRestrictionPolicyBinding.attributeTypeMap = {
    principals: {
        baseName: "principals",
        type: "Array<string>",
    },
    relation: {
        baseName: "relation",
        type: "SyntheticsTestRestrictionPolicyBindingRelation",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestRestrictionPolicyBinding.js.map