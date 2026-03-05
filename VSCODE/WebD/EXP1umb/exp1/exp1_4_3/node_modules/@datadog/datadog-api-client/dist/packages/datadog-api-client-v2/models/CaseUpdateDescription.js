"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateDescription = void 0;
/**
 * Case update description
 */
class CaseUpdateDescription {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateDescription.attributeTypeMap;
    }
}
exports.CaseUpdateDescription = CaseUpdateDescription;
/**
 * @ignore
 */
CaseUpdateDescription.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseUpdateDescriptionAttributes",
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
//# sourceMappingURL=CaseUpdateDescription.js.map