"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentRecommendation = void 0;
/**
 * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
 */
class ComponentRecommendation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ComponentRecommendation.attributeTypeMap;
    }
}
exports.ComponentRecommendation = ComponentRecommendation;
/**
 * @ignore
 */
ComponentRecommendation.attributeTypeMap = {
    estimation: {
        baseName: "estimation",
        type: "Estimation",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ComponentRecommendation.js.map