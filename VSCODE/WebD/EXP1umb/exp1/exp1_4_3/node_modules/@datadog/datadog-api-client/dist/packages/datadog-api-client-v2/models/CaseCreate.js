"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCreate = void 0;
/**
 * Case creation data
 */
class CaseCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseCreate.attributeTypeMap;
    }
}
exports.CaseCreate = CaseCreate;
/**
 * @ignore
 */
CaseCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "CaseCreateRelationships",
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
//# sourceMappingURL=CaseCreate.js.map