"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPLogItem = void 0;
/**
 * Logs that are sent over HTTP.
 */
class HTTPLogItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPLogItem.attributeTypeMap;
    }
}
exports.HTTPLogItem = HTTPLogItem;
/**
 * @ignore
 */
HTTPLogItem.attributeTypeMap = {
    ddsource: {
        baseName: "ddsource",
        type: "string",
    },
    ddtags: {
        baseName: "ddtags",
        type: "string",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: string; }",
    },
};
//# sourceMappingURL=HTTPLogItem.js.map