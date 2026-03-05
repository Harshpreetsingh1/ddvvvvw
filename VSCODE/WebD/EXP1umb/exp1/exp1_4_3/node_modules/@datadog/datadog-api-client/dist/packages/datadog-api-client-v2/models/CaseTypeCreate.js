"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeCreate = void 0;
/**
 * Case type
 */
class CaseTypeCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTypeCreate.attributeTypeMap;
    }
}
exports.CaseTypeCreate = CaseTypeCreate;
/**
 * @ignore
 */
CaseTypeCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseTypeResourceAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CaseTypeResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTypeCreate.js.map