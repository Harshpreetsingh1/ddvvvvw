"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestResultFullCheck = void 0;
/**
 * Object describing the API test configuration.
 */
class SyntheticsAPITestResultFullCheck {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestResultFullCheck.attributeTypeMap;
    }
}
exports.SyntheticsAPITestResultFullCheck = SyntheticsAPITestResultFullCheck;
/**
 * @ignore
 */
SyntheticsAPITestResultFullCheck.attributeTypeMap = {
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
//# sourceMappingURL=SyntheticsAPITestResultFullCheck.js.map