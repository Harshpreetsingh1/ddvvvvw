"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsServicesResponse = void 0;
/**
 * AWS Logs Services response body
 */
class AWSLogsServicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsServicesResponse.attributeTypeMap;
    }
}
exports.AWSLogsServicesResponse = AWSLogsServicesResponse;
/**
 * @ignore
 */
AWSLogsServicesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSLogsServicesResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsServicesResponse.js.map