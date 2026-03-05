"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionCreateRequestAttributes = void 0;
/**
 * The attribute object associated with the SLO correction to be created.
 */
class SLOCorrectionCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionCreateRequestAttributes.attributeTypeMap;
    }
}
exports.SLOCorrectionCreateRequestAttributes = SLOCorrectionCreateRequestAttributes;
/**
 * @ignore
 */
SLOCorrectionCreateRequestAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "SLOCorrectionCategory",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
    },
    duration: {
        baseName: "duration",
        type: "number",
        format: "int64",
    },
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    rrule: {
        baseName: "rrule",
        type: "string",
    },
    sloId: {
        baseName: "slo_id",
        type: "string",
        required: true,
    },
    start: {
        baseName: "start",
        type: "number",
        required: true,
        format: "int64",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCorrectionCreateRequestAttributes.js.map