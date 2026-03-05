"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseEmpty = void 0;
/**
 * Case empty request data
 */
class CaseEmpty {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseEmpty.attributeTypeMap;
    }
}
exports.CaseEmpty = CaseEmpty;
/**
 * @ignore
 */
CaseEmpty.attributeTypeMap = {
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
//# sourceMappingURL=CaseEmpty.js.map