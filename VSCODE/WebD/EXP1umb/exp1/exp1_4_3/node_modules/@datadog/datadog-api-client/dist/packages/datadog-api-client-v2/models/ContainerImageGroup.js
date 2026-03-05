"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageGroup = void 0;
/**
 * Container Image Group object.
 */
class ContainerImageGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageGroup.attributeTypeMap;
    }
}
exports.ContainerImageGroup = ContainerImageGroup;
/**
 * @ignore
 */
ContainerImageGroup.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ContainerImageGroupAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "ContainerImageGroupRelationships",
    },
    type: {
        baseName: "type",
        type: "ContainerImageGroupType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageGroup.js.map