"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePriority = void 0;
/**
 * Case priority status
 */
class CaseUpdatePriority {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdatePriority.attributeTypeMap;
    }
}
exports.CaseUpdatePriority = CaseUpdatePriority;
/**
 * @ignore
 */
CaseUpdatePriority.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseUpdatePriorityAttributes",
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
//# sourceMappingURL=CaseUpdatePriority.js.map