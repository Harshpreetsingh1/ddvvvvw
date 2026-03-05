"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsUpdateTestPauseStatusPayload = void 0;
/**
 * Object to start or pause an existing Synthetic test.
 */
class SyntheticsUpdateTestPauseStatusPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsUpdateTestPauseStatusPayload.attributeTypeMap;
    }
}
exports.SyntheticsUpdateTestPauseStatusPayload = SyntheticsUpdateTestPauseStatusPayload;
/**
 * @ignore
 */
SyntheticsUpdateTestPauseStatusPayload.attributeTypeMap = {
    newStatus: {
        baseName: "new_status",
        type: "SyntheticsTestPauseStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsUpdateTestPauseStatusPayload.js.map