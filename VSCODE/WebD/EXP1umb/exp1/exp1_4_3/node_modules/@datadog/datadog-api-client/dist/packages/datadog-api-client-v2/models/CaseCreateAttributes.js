"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCreateAttributes = void 0;
/**
 * Case creation attributes
 */
class CaseCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseCreateAttributes.attributeTypeMap;
    }
}
exports.CaseCreateAttributes = CaseCreateAttributes;
/**
 * @ignore
 */
CaseCreateAttributes.attributeTypeMap = {
    customAttributes: {
        baseName: "custom_attributes",
        type: "{ [key: string]: CustomAttributeValue; }",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "CasePriority",
    },
    statusName: {
        baseName: "status_name",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    typeId: {
        baseName: "type_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseCreateAttributes.js.map