"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLambdaResponse = void 0;
/**
 * Response containing the number of Lambda functions and sum of the invocations of all Lambda functions
 * for each hour for a given organization.
 */
class UsageLambdaResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLambdaResponse.attributeTypeMap;
    }
}
exports.UsageLambdaResponse = UsageLambdaResponse;
/**
 * @ignore
 */
UsageLambdaResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageLambdaHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLambdaResponse.js.map