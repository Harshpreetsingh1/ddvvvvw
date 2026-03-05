"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseManagementProjectData = void 0;
class CaseManagementProjectData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseManagementProjectData.attributeTypeMap;
    }
}
exports.CaseManagementProjectData = CaseManagementProjectData;
/**
 * @ignore
 */
CaseManagementProjectData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CaseManagementProjectDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseManagementProjectData.js.map