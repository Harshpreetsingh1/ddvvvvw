"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsServicesRequest = void 0;
/**
 * A list of current AWS services for which Datadog offers automatic log collection.
 */
class AWSLogsServicesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsServicesRequest.attributeTypeMap;
    }
}
exports.AWSLogsServicesRequest = AWSLogsServicesRequest;
/**
 * @ignore
 */
AWSLogsServicesRequest.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    services: {
        baseName: "services",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsServicesRequest.js.map