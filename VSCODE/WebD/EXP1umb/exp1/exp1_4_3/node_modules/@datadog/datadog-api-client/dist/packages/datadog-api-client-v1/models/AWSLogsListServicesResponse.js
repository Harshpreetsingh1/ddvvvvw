"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsListServicesResponse = void 0;
/**
 * The list of current AWS services for which Datadog offers automatic log collection.
 */
class AWSLogsListServicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsListServicesResponse.attributeTypeMap;
    }
}
exports.AWSLogsListServicesResponse = AWSLogsListServicesResponse;
/**
 * @ignore
 */
AWSLogsListServicesResponse.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    label: {
        baseName: "label",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsListServicesResponse.js.map