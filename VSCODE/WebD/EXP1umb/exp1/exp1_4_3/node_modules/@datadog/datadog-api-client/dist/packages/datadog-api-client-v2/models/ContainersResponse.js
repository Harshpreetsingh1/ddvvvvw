"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainersResponse = void 0;
/**
 * List of containers.
 */
class ContainersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainersResponse.attributeTypeMap;
    }
}
exports.ContainersResponse = ContainersResponse;
/**
 * @ignore
 */
ContainersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ContainerItem>",
    },
    links: {
        baseName: "links",
        type: "ContainersResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "ContainerMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainersResponse.js.map