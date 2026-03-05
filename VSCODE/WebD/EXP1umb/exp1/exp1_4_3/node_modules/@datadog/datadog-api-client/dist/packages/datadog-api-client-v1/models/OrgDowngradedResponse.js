"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgDowngradedResponse = void 0;
/**
 * Status of downgrade
 */
class OrgDowngradedResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgDowngradedResponse.attributeTypeMap;
    }
}
exports.OrgDowngradedResponse = OrgDowngradedResponse;
/**
 * @ignore
 */
OrgDowngradedResponse.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgDowngradedResponse.js.map