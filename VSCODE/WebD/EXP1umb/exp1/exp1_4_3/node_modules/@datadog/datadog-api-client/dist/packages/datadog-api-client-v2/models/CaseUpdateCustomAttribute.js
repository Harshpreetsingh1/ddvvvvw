"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateCustomAttribute = void 0;
/**
 * Case update custom attribute
 */
class CaseUpdateCustomAttribute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateCustomAttribute.attributeTypeMap;
    }
}
exports.CaseUpdateCustomAttribute = CaseUpdateCustomAttribute;
/**
 * @ignore
 */
CaseUpdateCustomAttribute.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomAttributeValue",
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
//# sourceMappingURL=CaseUpdateCustomAttribute.js.map