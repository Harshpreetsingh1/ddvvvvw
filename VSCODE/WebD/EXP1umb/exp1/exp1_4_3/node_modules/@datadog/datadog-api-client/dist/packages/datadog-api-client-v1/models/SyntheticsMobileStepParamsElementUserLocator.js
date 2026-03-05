"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStepParamsElementUserLocator = void 0;
/**
 * User locator to find the element.
 */
class SyntheticsMobileStepParamsElementUserLocator {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStepParamsElementUserLocator.attributeTypeMap;
    }
}
exports.SyntheticsMobileStepParamsElementUserLocator = SyntheticsMobileStepParamsElementUserLocator;
/**
 * @ignore
 */
SyntheticsMobileStepParamsElementUserLocator.attributeTypeMap = {
    failTestOnCannotLocate: {
        baseName: "failTestOnCannotLocate",
        type: "boolean",
    },
    values: {
        baseName: "values",
        type: "Array<SyntheticsMobileStepParamsElementUserLocatorValuesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileStepParamsElementUserLocator.js.map