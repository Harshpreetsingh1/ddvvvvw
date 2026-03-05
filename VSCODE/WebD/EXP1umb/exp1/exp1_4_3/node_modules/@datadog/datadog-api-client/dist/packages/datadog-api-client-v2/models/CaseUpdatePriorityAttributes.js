"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePriorityAttributes = void 0;
/**
 * Case update priority attributes
 */
class CaseUpdatePriorityAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdatePriorityAttributes.attributeTypeMap;
    }
}
exports.CaseUpdatePriorityAttributes = CaseUpdatePriorityAttributes;
/**
 * @ignore
 */
CaseUpdatePriorityAttributes.attributeTypeMap = {
    priority: {
        baseName: "priority",
        type: "CasePriority",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdatePriorityAttributes.js.map