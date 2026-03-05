"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaseRequestData = void 0;
/**
 * Data of the case to create.
 */
class CreateCaseRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateCaseRequestData.attributeTypeMap;
    }
}
exports.CreateCaseRequestData = CreateCaseRequestData;
/**
 * @ignore
 */
CreateCaseRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateCaseRequestDataAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "CreateCaseRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "CaseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateCaseRequestData.js.map