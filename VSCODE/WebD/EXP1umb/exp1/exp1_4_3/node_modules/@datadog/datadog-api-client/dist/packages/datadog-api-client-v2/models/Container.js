"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
/**
 * Container object.
 */
class Container {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Container.attributeTypeMap;
    }
}
exports.Container = Container;
/**
 * @ignore
 */
Container.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ContainerAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ContainerType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Container.js.map