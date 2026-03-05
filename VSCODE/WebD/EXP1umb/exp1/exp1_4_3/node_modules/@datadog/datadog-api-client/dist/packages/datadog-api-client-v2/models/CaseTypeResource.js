"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeResource = void 0;
/**
 * The definition of `CaseType` object.
 */
class CaseTypeResource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTypeResource.attributeTypeMap;
    }
}
exports.CaseTypeResource = CaseTypeResource;
/**
 * @ignore
 */
CaseTypeResource.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseTypeResourceAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CaseTypeResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTypeResource.js.map