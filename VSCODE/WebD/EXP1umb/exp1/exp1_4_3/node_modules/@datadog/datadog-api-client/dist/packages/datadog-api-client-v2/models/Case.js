"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
/**
 * A case
 */
class Case {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Case.attributeTypeMap;
    }
}
exports.Case = Case;
/**
 * @ignore
 */
Case.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "CaseRelationships",
    },
    type: {
        baseName: "type",
        type: "CaseResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Case.js.map