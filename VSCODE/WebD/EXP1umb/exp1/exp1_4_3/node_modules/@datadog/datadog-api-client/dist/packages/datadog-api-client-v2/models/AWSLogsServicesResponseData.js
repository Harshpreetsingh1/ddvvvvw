"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsServicesResponseData = void 0;
/**
 * AWS Logs Services response body
 */
class AWSLogsServicesResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsServicesResponseData.attributeTypeMap;
    }
}
exports.AWSLogsServicesResponseData = AWSLogsServicesResponseData;
/**
 * @ignore
 */
AWSLogsServicesResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSLogsServicesResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSLogsServicesResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsServicesResponseData.js.map