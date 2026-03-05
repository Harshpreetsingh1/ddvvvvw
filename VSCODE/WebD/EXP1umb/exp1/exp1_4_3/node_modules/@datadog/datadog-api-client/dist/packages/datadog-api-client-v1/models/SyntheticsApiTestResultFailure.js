"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsApiTestResultFailure = void 0;
/**
 * The API test failure details.
 */
class SyntheticsApiTestResultFailure {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsApiTestResultFailure.attributeTypeMap;
    }
}
exports.SyntheticsApiTestResultFailure = SyntheticsApiTestResultFailure;
/**
 * @ignore
 */
SyntheticsApiTestResultFailure.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "SyntheticsApiTestFailureCode",
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
//# sourceMappingURL=SyntheticsApiTestResultFailure.js.map