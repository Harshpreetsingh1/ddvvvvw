"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageFargateResponse = void 0;
/**
 * Response containing the number of Fargate tasks run and hourly usage.
 */
class UsageFargateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageFargateResponse.attributeTypeMap;
    }
}
exports.UsageFargateResponse = UsageFargateResponse;
/**
 * @ignore
 */
UsageFargateResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageFargateHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageFargateResponse.js.map