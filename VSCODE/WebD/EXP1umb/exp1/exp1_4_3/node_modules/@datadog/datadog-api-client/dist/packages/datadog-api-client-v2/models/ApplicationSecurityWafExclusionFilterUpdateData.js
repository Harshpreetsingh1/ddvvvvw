"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterUpdateData = void 0;
/**
 * Object for updating a single WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterUpdateData.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterUpdateData = ApplicationSecurityWafExclusionFilterUpdateData;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationSecurityWafExclusionFilterUpdateAttributes",
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
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterUpdateData.js.map