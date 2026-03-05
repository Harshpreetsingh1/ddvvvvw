"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppRequestDataAttributes = void 0;
/**
 * App definition attributes such as name, description, and components.
 */
class CreateAppRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateAppRequestDataAttributes = CreateAppRequestDataAttributes;
/**
 * @ignore
 */
CreateAppRequestDataAttributes.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<ComponentGrid>",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    queries: {
        baseName: "queries",
        type: "Array<Query>",
    },
    rootInstanceName: {
        baseName: "rootInstanceName",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppRequestDataAttributes.js.map