"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMuteResponse = void 0;
/**
 * Response with the list of muted host for your organization.
 */
class HostMuteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMuteResponse.attributeTypeMap;
    }
}
exports.HostMuteResponse = HostMuteResponse;
/**
 * @ignore
 */
HostMuteResponse.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "string",
    },
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMuteResponse.js.map