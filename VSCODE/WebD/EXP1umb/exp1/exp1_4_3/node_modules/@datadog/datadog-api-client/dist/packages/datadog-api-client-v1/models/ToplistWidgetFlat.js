"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToplistWidgetFlat = void 0;
/**
 * Top list widget flat display.
 */
class ToplistWidgetFlat {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ToplistWidgetFlat.attributeTypeMap;
    }
}
exports.ToplistWidgetFlat = ToplistWidgetFlat;
/**
 * @ignore
 */
ToplistWidgetFlat.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "ToplistWidgetFlatType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ToplistWidgetFlat.js.map