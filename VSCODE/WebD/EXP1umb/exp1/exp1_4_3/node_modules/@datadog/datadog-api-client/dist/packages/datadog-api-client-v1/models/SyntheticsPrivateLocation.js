"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPrivateLocation = void 0;
/**
 * Object containing information about the private location to create.
 */
class SyntheticsPrivateLocation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPrivateLocation.attributeTypeMap;
    }
}
exports.SyntheticsPrivateLocation = SyntheticsPrivateLocation;
/**
 * @ignore
 */
SyntheticsPrivateLocation.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    metadata: {
        baseName: "metadata",
        type: "SyntheticsPrivateLocationMetadata",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    secrets: {
        baseName: "secrets",
        type: "SyntheticsPrivateLocationSecrets",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPrivateLocation.js.map