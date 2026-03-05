"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateAttributes = void 0;
/**
 * Case update attributes
 */
class CaseUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateAttributes.attributeTypeMap;
    }
}
exports.CaseUpdateAttributes = CaseUpdateAttributes;
/**
 * @ignore
 */
CaseUpdateAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseUpdateAttributesAttributes",
        required: true,
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
//# sourceMappingURL=CaseUpdateAttributes.js.map