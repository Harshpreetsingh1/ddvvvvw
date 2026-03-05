"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationResponse = void 0;
/**
 * Response with an organization.
 */
class OrganizationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationResponse.attributeTypeMap;
    }
}
exports.OrganizationResponse = OrganizationResponse;
/**
 * @ignore
 */
OrganizationResponse.attributeTypeMap = {
    org: {
        baseName: "org",
        type: "Organization",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationResponse.js.map