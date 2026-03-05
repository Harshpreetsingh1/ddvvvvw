"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrection = void 0;
/**
 * The response object of a list of SLO corrections.
 */
class SLOCorrection {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrection.attributeTypeMap;
    }
}
exports.SLOCorrection = SLOCorrection;
/**
 * @ignore
 */
SLOCorrection.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SLOCorrectionResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=SLOCorrection.js.map