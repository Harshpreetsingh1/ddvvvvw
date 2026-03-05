"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDegradationRequestDataAttributes = void 0;
/**
 * The supported attributes for creating a degradation.
 */
class CreateDegradationRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDegradationRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateDegradationRequestDataAttributes = CreateDegradationRequestDataAttributes;
/**
 * @ignore
 */
CreateDegradationRequestDataAttributes.attributeTypeMap = {
    componentsAffected: {
        baseName: "components_affected",
        type: "Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "CreateDegradationRequestDataAttributesStatus",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDegradationRequestDataAttributes.js.map