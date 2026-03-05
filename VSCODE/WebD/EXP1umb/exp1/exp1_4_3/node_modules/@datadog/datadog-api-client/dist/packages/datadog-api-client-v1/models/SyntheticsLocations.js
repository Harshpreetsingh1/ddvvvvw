"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsLocations = void 0;
/**
 * List of Synthetic locations.
 */
class SyntheticsLocations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsLocations.attributeTypeMap;
    }
}
exports.SyntheticsLocations = SyntheticsLocations;
/**
 * @ignore
 */
SyntheticsLocations.attributeTypeMap = {
    locations: {
        baseName: "locations",
        type: "Array<SyntheticsLocation>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsLocations.js.map