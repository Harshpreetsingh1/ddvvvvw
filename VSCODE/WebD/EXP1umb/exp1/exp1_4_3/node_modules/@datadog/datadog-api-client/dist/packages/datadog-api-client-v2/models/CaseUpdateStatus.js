"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateStatus = void 0;
/**
 * Case update status
 */
class CaseUpdateStatus {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateStatus.attributeTypeMap;
    }
}
exports.CaseUpdateStatus = CaseUpdateStatus;
/**
 * @ignore
 */
CaseUpdateStatus.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseUpdateStatusAttributes",
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
//# sourceMappingURL=CaseUpdateStatus.js.map