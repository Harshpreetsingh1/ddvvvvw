"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateDescriptionRequest = void 0;
/**
 * Case update description request
 */
class CaseUpdateDescriptionRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateDescriptionRequest.attributeTypeMap;
    }
}
exports.CaseUpdateDescriptionRequest = CaseUpdateDescriptionRequest;
/**
 * @ignore
 */
CaseUpdateDescriptionRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseUpdateDescription",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateDescriptionRequest.js.map