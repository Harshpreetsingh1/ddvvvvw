"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateStatusAttributes = void 0;
/**
 * Case update status attributes
 */
class CaseUpdateStatusAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateStatusAttributes.attributeTypeMap;
    }
}
exports.CaseUpdateStatusAttributes = CaseUpdateStatusAttributes;
/**
 * @ignore
 */
CaseUpdateStatusAttributes.attributeTypeMap = {
    status: {
        baseName: "status",
        type: "CaseStatus",
    },
    statusName: {
        baseName: "status_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateStatusAttributes.js.map