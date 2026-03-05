"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaseRequestDataAttributes = void 0;
/**
 * Attributes of the case to create.
 */
class CreateCaseRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateCaseRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateCaseRequestDataAttributes = CreateCaseRequestDataAttributes;
/**
 * @ignore
 */
CreateCaseRequestDataAttributes.attributeTypeMap = {
    assigneeId: {
        baseName: "assignee_id",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "CasePriority",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateCaseRequestDataAttributes.js.map