"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultFailure = void 0;
/**
 * The browser test failure details.
 */
class SyntheticsBrowserTestResultFailure {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultFailure.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestResultFailure = SyntheticsBrowserTestResultFailure;
/**
 * @ignore
 */
SyntheticsBrowserTestResultFailure.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "SyntheticsBrowserTestFailureCode",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestResultFailure.js.map