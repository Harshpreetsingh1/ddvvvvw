"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseManagementProject = void 0;
/**
 * Case management project.
 */
class CaseManagementProject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseManagementProject.attributeTypeMap;
    }
}
exports.CaseManagementProject = CaseManagementProject;
/**
 * @ignore
 */
CaseManagementProject.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseManagementProjectData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseManagementProject.js.map