"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStepParamsElement = void 0;
/**
 * Information about the element used for a step.
 */
class SyntheticsMobileStepParamsElement {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStepParamsElement.attributeTypeMap;
    }
}
exports.SyntheticsMobileStepParamsElement = SyntheticsMobileStepParamsElement;
/**
 * @ignore
 */
SyntheticsMobileStepParamsElement.attributeTypeMap = {
    context: {
        baseName: "context",
        type: "string",
    },
    contextType: {
        baseName: "contextType",
        type: "SyntheticsMobileStepParamsElementContextType",
    },
    elementDescription: {
        baseName: "elementDescription",
        type: "string",
    },
    multiLocator: {
        baseName: "multiLocator",
        type: "any",
    },
    relativePosition: {
        baseName: "relativePosition",
        type: "SyntheticsMobileStepParamsElementRelativePosition",
    },
    textContent: {
        baseName: "textContent",
        type: "string",
    },
    userLocator: {
        baseName: "userLocator",
        type: "SyntheticsMobileStepParamsElementUserLocator",
    },
    viewName: {
        baseName: "viewName",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileStepParamsElement.js.map