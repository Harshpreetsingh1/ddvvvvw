"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionCreateRequest = void 0;
/**
 * An object that defines a correction to be applied to an SLO.
 */
class SLOCorrectionCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionCreateRequest.attributeTypeMap;
    }
}
exports.SLOCorrectionCreateRequest = SLOCorrectionCreateRequest;
/**
 * @ignore
 */
SLOCorrectionCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOCorrectionCreateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionCreateRequest.js.map