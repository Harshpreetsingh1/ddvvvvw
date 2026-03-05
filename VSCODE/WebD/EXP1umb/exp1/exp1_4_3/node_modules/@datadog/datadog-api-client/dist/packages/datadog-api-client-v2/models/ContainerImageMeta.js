"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageMeta = void 0;
/**
 * Response metadata object.
 */
class ContainerImageMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageMeta.attributeTypeMap;
    }
}
exports.ContainerImageMeta = ContainerImageMeta;
/**
 * @ignore
 */
ContainerImageMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "ContainerImageMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageMeta.js.map