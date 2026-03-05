"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCorrectionResponseAttributes = void 0;
/**
 * The attribute object associated with the SLO correction.
 */
class SLOCorrectionResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCorrectionResponseAttributes.attributeTypeMap;
    }
}
exports.SLOCorrectionResponseAttributes = SLOCorrectionResponseAttributes;
/**
 * @ignore
 */
SLOCorrectionResponseAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "SLOCorrectionCategory",
    },
    createdAt: {
        baseName: "created_at",
        type: "number",
        format: "int64",
    },
    creator: {
        baseName: "creator",
        type: "Creator",
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
    modifiedAt: {
        baseName: "modified_at",
        type: "number",
        format: "int64",
    },
    modifier: {
        baseName: "modifier",
        type: "SLOCorrectionResponseAttributesModifier",
    },
    rrule: {
        baseName: "rrule",
        type: "string",
    },
    sloId: {
        baseName: "slo_id",
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
//# sourceMappingURL=SLOCorrectionResponseAttributes.js.map