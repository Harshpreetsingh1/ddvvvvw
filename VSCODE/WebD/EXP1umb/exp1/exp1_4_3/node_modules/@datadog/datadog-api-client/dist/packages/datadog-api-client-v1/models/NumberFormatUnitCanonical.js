"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFormatUnitCanonical = void 0;
/**
 * Canonical unit.
 */
class NumberFormatUnitCanonical {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NumberFormatUnitCanonical.attributeTypeMap;
    }
}
exports.NumberFormatUnitCanonical = NumberFormatUnitCanonical;
/**
 * @ignore
 */
NumberFormatUnitCanonical.attributeTypeMap = {
    perUnitName: {
        baseName: "per_unit_name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "NumberFormatUnitScaleType",
    },
    unitName: {
        baseName: "unit_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NumberFormatUnitCanonical.js.map