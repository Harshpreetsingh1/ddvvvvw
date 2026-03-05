"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachCaseRequestData = void 0;
/**
 * Data of the case to attach security findings to.
 */
class AttachCaseRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachCaseRequestData.attributeTypeMap;
    }
}
exports.AttachCaseRequestData = AttachCaseRequestData;
/**
 * @ignore
 */
AttachCaseRequestData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "AttachCaseRequestDataRelationships",
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
//# sourceMappingURL=AttachCaseRequestData.js.map