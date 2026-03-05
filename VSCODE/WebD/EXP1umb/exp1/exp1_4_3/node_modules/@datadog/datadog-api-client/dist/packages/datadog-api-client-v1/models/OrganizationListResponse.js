"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationListResponse = void 0;
/**
 * Response with the list of organizations.
 */
class OrganizationListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationListResponse.attributeTypeMap;
    }
}
exports.OrganizationListResponse = OrganizationListResponse;
/**
 * @ignore
 */
OrganizationListResponse.attributeTypeMap = {
    orgs: {
        baseName: "orgs",
        type: "Array<Organization>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationListResponse.js.map