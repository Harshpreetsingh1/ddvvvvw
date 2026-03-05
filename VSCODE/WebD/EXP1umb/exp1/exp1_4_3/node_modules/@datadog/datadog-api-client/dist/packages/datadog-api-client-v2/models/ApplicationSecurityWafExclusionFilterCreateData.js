"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterCreateData = void 0;
/**
 * Object for creating a single WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterCreateData.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterCreateData = ApplicationSecurityWafExclusionFilterCreateData;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationSecurityWafExclusionFilterCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApplicationSecurityWafExclusionFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterCreateData.js.map