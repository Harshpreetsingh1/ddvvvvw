"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDisableResponse = void 0;
/**
 * Array of user disabled for a given organization.
 */
class UserDisableResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserDisableResponse.attributeTypeMap;
    }
}
exports.UserDisableResponse = UserDisableResponse;
/**
 * @ignore
 */
UserDisableResponse.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserDisableResponse.js.map