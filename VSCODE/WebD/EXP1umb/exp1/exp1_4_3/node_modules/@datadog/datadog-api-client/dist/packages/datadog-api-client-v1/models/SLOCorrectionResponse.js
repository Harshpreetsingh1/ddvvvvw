"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionResponse = void 0;
/**
 * The response object of an SLO correction.
 */
class SLOCorrectionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionResponse.attributeTypeMap;
    }
}
exports.SLOCorrectionResponse = SLOCorrectionResponse;
/**
 * @ignore
 */
SLOCorrectionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOCorrection",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionResponse.js.map