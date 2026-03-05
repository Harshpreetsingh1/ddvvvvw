"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIoTResponse = void 0;
/**
 * Response containing the IoT usage for each hour for a given organization.
 */
class UsageIoTResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIoTResponse.attributeTypeMap;
    }
}
exports.UsageIoTResponse = UsageIoTResponse;
/**
 * @ignore
 */
UsageIoTResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageIoTHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageIoTResponse.js.map