"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsDeleteTestsResponse = void 0;
/**
 * Response object for deleting Synthetic tests.
 */
class SyntheticsDeleteTestsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsDeleteTestsResponse.attributeTypeMap;
    }
}
exports.SyntheticsDeleteTestsResponse = SyntheticsDeleteTestsResponse;
/**
 * @ignore
 */
SyntheticsDeleteTestsResponse.attributeTypeMap = {
    deletedTests: {
        baseName: "deleted_tests",
        type: "Array<SyntheticsDeletedTest>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsDeleteTestsResponse.js.map