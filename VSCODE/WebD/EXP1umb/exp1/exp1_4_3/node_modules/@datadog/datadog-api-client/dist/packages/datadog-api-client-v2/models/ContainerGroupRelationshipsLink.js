"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerGroupRelationshipsLink = void 0;
/**
 * Relationships to Containers inside a Container Group.
 */
class ContainerGroupRelationshipsLink {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerGroupRelationshipsLink.attributeTypeMap;
    }
}
exports.ContainerGroupRelationshipsLink = ContainerGroupRelationshipsLink;
/**
 * @ignore
 */
ContainerGroupRelationshipsLink.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<string>",
    },
    links: {
        baseName: "links",
        type: "ContainerGroupRelationshipsLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerGroupRelationshipsLink.js.map