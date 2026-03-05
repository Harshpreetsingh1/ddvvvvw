"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateBody = void 0;
/**
 * Object describing an organization to create.
 */
class OrganizationCreateBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationCreateBody.attributeTypeMap;
    }
}
exports.OrganizationCreateBody = OrganizationCreateBody;
/**
 * @ignore
 */
OrganizationCreateBody.attributeTypeMap = {
    billing: {
        baseName: "billing",
        type: "OrganizationBilling",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    subscription: {
        baseName: "subscription",
        type: "OrganizationSubscription",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationCreateBody.js.map