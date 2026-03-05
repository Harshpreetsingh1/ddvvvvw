"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionUpdateData = void 0;
/**
 * The data object associated with the SLO correction to be updated.
 */
class SLOCorrectionUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionUpdateData.attributeTypeMap;
    }
}
exports.SLOCorrectionUpdateData = SLOCorrectionUpdateData;
/**
 * @ignore
 */
SLOCorrectionUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SLOCorrectionUpdateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "SLOCorrectionType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionUpdateData.js.map