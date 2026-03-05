"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateTitle = void 0;
/**
 * Case update title
 */
class CaseUpdateTitle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateTitle.attributeTypeMap;
    }
}
exports.CaseUpdateTitle = CaseUpdateTitle;
/**
 * @ignore
 */
CaseUpdateTitle.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseUpdateTitleAttributes",
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
//# sourceMappingURL=CaseUpdateTitle.js.map