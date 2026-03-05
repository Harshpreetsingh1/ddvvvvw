"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFormatUnitScale = void 0;
/**
 * The definition of `NumberFormatUnitScale` object.
 */
class NumberFormatUnitScale {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NumberFormatUnitScale.attributeTypeMap;
    }
}
exports.NumberFormatUnitScale = NumberFormatUnitScale;
/**
 * @ignore
 */
NumberFormatUnitScale.attributeTypeMap = {
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
//# sourceMappingURL=NumberFormatUnitScale.js.map