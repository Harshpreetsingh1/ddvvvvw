"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSyntheticsAPIResponse = void 0;
/**
 * Response containing the number of Synthetics API tests run for each hour for a given organization.
 */
class UsageSyntheticsAPIResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSyntheticsAPIResponse.attributeTypeMap;
    }
}
exports.UsageSyntheticsAPIResponse = UsageSyntheticsAPIResponse;
/**
 * @ignore
 */
UsageSyntheticsAPIResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageSyntheticsAPIHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSyntheticsAPIResponse.js.map