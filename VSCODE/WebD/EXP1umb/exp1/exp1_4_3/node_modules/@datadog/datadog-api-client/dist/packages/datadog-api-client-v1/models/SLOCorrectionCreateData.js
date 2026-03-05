"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionCreateData = void 0;
/**
 * The data object associated with the SLO correction to be created.
 */
class SLOCorrectionCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionCreateData.attributeTypeMap;
    }
}
exports.SLOCorrectionCreateData = SLOCorrectionCreateData;
/**
 * @ignore
 */
SLOCorrectionCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SLOCorrectionCreateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "SLOCorrectionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionCreateData.js.map