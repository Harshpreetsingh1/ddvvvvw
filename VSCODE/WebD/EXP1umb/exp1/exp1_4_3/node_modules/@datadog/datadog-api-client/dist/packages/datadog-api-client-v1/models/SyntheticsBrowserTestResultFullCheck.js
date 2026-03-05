"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultFullCheck = void 0;
/**
 * Object describing the browser test configuration.
 */
class SyntheticsBrowserTestResultFullCheck {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultFullCheck.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestResultFullCheck = SyntheticsBrowserTestResultFullCheck;
/**
 * @ignore
 */
SyntheticsBrowserTestResultFullCheck.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "SyntheticsTestConfig",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestResultFullCheck.js.map