"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterResource = void 0;
/**
 * A JSON:API resource for an WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterResource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterResource.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterResource = ApplicationSecurityWafExclusionFilterResource;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterResource.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationSecurityWafExclusionFilterAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ApplicationSecurityWafExclusionFilterType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterResource.js.map