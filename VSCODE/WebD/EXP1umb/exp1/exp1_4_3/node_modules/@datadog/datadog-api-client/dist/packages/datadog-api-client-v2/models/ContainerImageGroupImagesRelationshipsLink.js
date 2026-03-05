"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageGroupImagesRelationshipsLink = void 0;
/**
 * Relationships to Container Images inside a Container Image Group.
 */
class ContainerImageGroupImagesRelationshipsLink {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageGroupImagesRelationshipsLink.attributeTypeMap;
    }
}
exports.ContainerImageGroupImagesRelationshipsLink = ContainerImageGroupImagesRelationshipsLink;
/**
 * @ignore
 */
ContainerImageGroupImagesRelationshipsLink.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<string>",
    },
    links: {
        baseName: "links",
        type: "ContainerImageGroupRelationshipsLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageGroupImagesRelationshipsLink.js.map