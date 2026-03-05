"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
/**
 * Create, edit, and manage organizations.
 */
class Organization {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Organization.attributeTypeMap;
    }
}
exports.Organization = Organization;
/**
 * @ignore
 */
Organization.attributeTypeMap = {
    billing: {
        baseName: "billing",
        type: "OrganizationBilling",
    },
    created: {
        baseName: "created",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    settings: {
        baseName: "settings",
        type: "OrganizationSettings",
    },
    subscription: {
        baseName: "subscription",
        type: "OrganizationSubscription",
    },
    trial: {
        baseName: "trial",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Organization.js.map