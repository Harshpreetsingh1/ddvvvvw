"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerMeta = void 0;
/**
 * Response metadata object.
 */
class ContainerMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerMeta.attributeTypeMap;
    }
}
exports.ContainerMeta = ContainerMeta;
/**
 * @ignore
 */
ContainerMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "ContainerMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerMeta.js.map