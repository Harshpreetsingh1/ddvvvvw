"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerGroup = void 0;
/**
 * Container group object.
 */
class ContainerGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerGroup.attributeTypeMap;
    }
}
exports.ContainerGroup = ContainerGroup;
/**
 * @ignore
 */
ContainerGroup.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ContainerGroupAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "ContainerGroupRelationships",
    },
    type: {
        baseName: "type",
        type: "ContainerGroupType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerGroup.js.map