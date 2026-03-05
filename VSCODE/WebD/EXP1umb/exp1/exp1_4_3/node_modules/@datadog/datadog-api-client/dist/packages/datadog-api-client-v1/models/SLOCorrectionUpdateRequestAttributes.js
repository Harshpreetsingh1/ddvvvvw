"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionUpdateRequestAttributes = void 0;
/**
 * The attribute object associated with the SLO correction to be updated.
 */
class SLOCorrectionUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.SLOCorrectionUpdateRequestAttributes = SLOCorrectionUpdateRequestAttributes;
/**
 * @ignore
 */
SLOCorrectionUpdateRequestAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "SLOCorrectionCategory",
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
    start: {
        baseName: "start",
        type: "number",
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
//# sourceMappingURL=SLOCorrectionUpdateRequestAttributes.js.map