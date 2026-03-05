"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImage = void 0;
/**
 * Container Image object.
 */
class ContainerImage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImage.attributeTypeMap;
    }
}
exports.ContainerImage = ContainerImage;
/**
 * @ignore
 */
ContainerImage.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ContainerImageAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ContainerImageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImage.js.map