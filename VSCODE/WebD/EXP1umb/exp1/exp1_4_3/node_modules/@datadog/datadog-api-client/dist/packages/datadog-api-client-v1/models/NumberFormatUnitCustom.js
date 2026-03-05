"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFormatUnitCustom = void 0;
/**
 * Custom unit.
 */
class NumberFormatUnitCustom {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NumberFormatUnitCustom.attributeTypeMap;
    }
}
exports.NumberFormatUnitCustom = NumberFormatUnitCustom;
/**
 * @ignore
 */
NumberFormatUnitCustom.attributeTypeMap = {
    label: {
        baseName: "label",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "NumberFormatUnitCustomType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NumberFormatUnitCustom.js.map