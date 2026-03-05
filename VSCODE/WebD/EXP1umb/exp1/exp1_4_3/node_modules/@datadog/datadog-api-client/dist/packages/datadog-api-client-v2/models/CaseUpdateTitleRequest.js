"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateTitleRequest = void 0;
/**
 * Case update title request
 */
class CaseUpdateTitleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateTitleRequest.attributeTypeMap;
    }
}
exports.CaseUpdateTitleRequest = CaseUpdateTitleRequest;
/**
 * @ignore
 */
CaseUpdateTitleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseUpdateTitle",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateTitleRequest.js.map