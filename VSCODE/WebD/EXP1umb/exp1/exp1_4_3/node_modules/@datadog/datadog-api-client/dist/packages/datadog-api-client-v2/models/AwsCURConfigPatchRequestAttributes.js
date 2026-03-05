"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigPatchRequestAttributes = void 0;
/**
 * Attributes for AWS CUR config Patch Request.
 */
class AwsCURConfigPatchRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigPatchRequestAttributes.attributeTypeMap;
    }
}
exports.AwsCURConfigPatchRequestAttributes = AwsCURConfigPatchRequestAttributes;
/**
 * @ignore
 */
AwsCURConfigPatchRequestAttributes.attributeTypeMap = {
    accountFilters: {
        baseName: "account_filters",
        type: "AccountFilteringConfig",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigPatchRequestAttributes.js.map