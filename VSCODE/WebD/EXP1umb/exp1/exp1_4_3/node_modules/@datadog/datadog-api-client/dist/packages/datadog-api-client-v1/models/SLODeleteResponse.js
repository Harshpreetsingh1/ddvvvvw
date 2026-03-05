"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLODeleteResponse = void 0;
/**
 * A response list of all service level objective deleted.
 */
class SLODeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLODeleteResponse.attributeTypeMap;
    }
}
exports.SLODeleteResponse = SLODeleteResponse;
/**
 * @ignore
 */
SLODeleteResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<string>",
    },
    errors: {
        baseName: "errors",
        type: "{ [key: string]: string; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLODeleteResponse.js.map