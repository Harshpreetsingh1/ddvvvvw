"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatusPageRequestDataAttributes = void 0;
/**
 * The supported attributes for creating a status page.
 */
class CreateStatusPageRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateStatusPageRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateStatusPageRequestDataAttributes = CreateStatusPageRequestDataAttributes;
/**
 * @ignore
 */
CreateStatusPageRequestDataAttributes.attributeTypeMap = {
    companyLogo: {
        baseName: "company_logo",
        type: "string",
    },
    components: {
        baseName: "components",
        type: "Array<CreateStatusPageRequestDataAttributesComponentsItems>",
    },
    domainPrefix: {
        baseName: "domain_prefix",
        type: "string",
        required: true,
    },
    emailHeaderImage: {
        baseName: "email_header_image",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    favicon: {
        baseName: "favicon",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    subscriptionsEnabled: {
        baseName: "subscriptions_enabled",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "CreateStatusPageRequestDataAttributesType",
        required: true,
    },
    visualizationType: {
        baseName: "visualization_type",
        type: "CreateStatusPageRequestDataAttributesVisualizationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateStatusPageRequestDataAttributes.js.map