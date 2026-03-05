"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionListResponse = void 0;
/**
 * A list of  SLO correction objects.
 */
class SLOCorrectionListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionListResponse.attributeTypeMap;
    }
}
exports.SLOCorrectionListResponse = SLOCorrectionListResponse;
/**
 * @ignore
 */
SLOCorrectionListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SLOCorrection>",
    },
    meta: {
        baseName: "meta",
        type: "ResponseMetaAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionListResponse.js.map