"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerGroupRelationships = void 0;
/**
 * Relationships to containers inside a container group.
 */
class ContainerGroupRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerGroupRelationships.attributeTypeMap;
    }
}
exports.ContainerGroupRelationships = ContainerGroupRelationships;
/**
 * @ignore
 */
ContainerGroupRelationships.attributeTypeMap = {
    containers: {
        baseName: "containers",
        type: "ContainerGroupRelationshipsLink",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerGroupRelationships.js.map