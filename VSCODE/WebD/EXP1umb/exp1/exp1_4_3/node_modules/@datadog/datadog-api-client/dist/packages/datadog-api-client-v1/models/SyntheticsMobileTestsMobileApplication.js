"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileTestsMobileApplication = void 0;
/**
 * Mobile application for mobile synthetics test.
 */
class SyntheticsMobileTestsMobileApplication {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileTestsMobileApplication.attributeTypeMap;
    }
}
exports.SyntheticsMobileTestsMobileApplication = SyntheticsMobileTestsMobileApplication;
/**
 * @ignore
 */
SyntheticsMobileTestsMobileApplication.attributeTypeMap = {
    applicationId: {
        baseName: "applicationId",
        type: "string",
        required: true,
    },
    referenceId: {
        baseName: "referenceId",
        type: "string",
        required: true,
    },
    referenceType: {
        baseName: "referenceType",
        type: "SyntheticsMobileTestsMobileApplicationReferenceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileTestsMobileApplication.js.map