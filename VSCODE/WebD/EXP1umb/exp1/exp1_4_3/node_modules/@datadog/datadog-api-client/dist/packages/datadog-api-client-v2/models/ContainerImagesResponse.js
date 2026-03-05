"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImagesResponse = void 0;
/**
 * List of Container Images.
 */
class ContainerImagesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImagesResponse.attributeTypeMap;
    }
}
exports.ContainerImagesResponse = ContainerImagesResponse;
/**
 * @ignore
 */
ContainerImagesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ContainerImageItem>",
    },
    links: {
        baseName: "links",
        type: "ContainerImagesResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "ContainerImageMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImagesResponse.js.map