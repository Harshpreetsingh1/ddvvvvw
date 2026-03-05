"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageGroupRelationships = void 0;
/**
 * Relationships inside a Container Image Group.
 */
class ContainerImageGroupRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageGroupRelationships.attributeTypeMap;
    }
}
exports.ContainerImageGroupRelationships = ContainerImageGroupRelationships;
/**
 * @ignore
 */
ContainerImageGroupRelationships.attributeTypeMap = {
    containerImages: {
        baseName: "container_images",
        type: "ContainerImageGroupImagesRelationshipsLink",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageGroupRelationships.js.map