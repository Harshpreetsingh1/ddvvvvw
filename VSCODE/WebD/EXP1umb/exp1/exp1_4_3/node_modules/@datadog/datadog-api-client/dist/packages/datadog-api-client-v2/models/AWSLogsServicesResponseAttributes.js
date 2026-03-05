"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsServicesResponseAttributes = void 0;
/**
 * AWS Logs Services response body
 */
class AWSLogsServicesResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsServicesResponseAttributes.attributeTypeMap;
    }
}
exports.AWSLogsServicesResponseAttributes = AWSLogsServicesResponseAttributes;
/**
 * @ignore
 */
AWSLogsServicesResponseAttributes.attributeTypeMap = {
    logsServices: {
        baseName: "logs_services",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsServicesResponseAttributes.js.map