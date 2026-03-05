"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSyntheticsResponse = void 0;
/**
 * Response containing the number of Synthetics API tests run for each hour for a given organization.
 */
class UsageSyntheticsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSyntheticsResponse.attributeTypeMap;
    }
}
exports.UsageSyntheticsResponse = UsageSyntheticsResponse;
/**
 * @ignore
 */
UsageSyntheticsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageSyntheticsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSyntheticsResponse.js.map