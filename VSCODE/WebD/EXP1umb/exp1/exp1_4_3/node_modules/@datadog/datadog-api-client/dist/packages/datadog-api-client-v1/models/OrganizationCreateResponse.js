"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateResponse = void 0;
/**
 * Response object for an organization creation.
 */
class OrganizationCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationCreateResponse.attributeTypeMap;
    }
}
exports.OrganizationCreateResponse = OrganizationCreateResponse;
/**
 * @ignore
 */
OrganizationCreateResponse.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "ApiKey",
    },
    applicationKey: {
        baseName: "application_key",
        type: "ApplicationKey",
    },
    org: {
        baseName: "org",
        type: "Organization",
    },
    user: {
        baseName: "user",
        type: "User",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationCreateResponse.js.map