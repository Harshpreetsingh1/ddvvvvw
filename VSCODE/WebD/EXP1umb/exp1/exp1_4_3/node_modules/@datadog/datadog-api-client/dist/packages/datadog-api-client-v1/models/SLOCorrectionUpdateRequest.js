"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionUpdateRequest = void 0;
/**
 * An object that defines a correction to be applied to an SLO.
 */
class SLOCorrectionUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionUpdateRequest.attributeTypeMap;
    }
}
exports.SLOCorrectionUpdateRequest = SLOCorrectionUpdateRequest;
/**
 * @ignore
 */
SLOCorrectionUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOCorrectionUpdateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionUpdateRequest.js.map