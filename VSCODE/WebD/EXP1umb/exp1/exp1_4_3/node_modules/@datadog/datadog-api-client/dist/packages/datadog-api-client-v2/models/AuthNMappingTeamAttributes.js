"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingTeamAttributes = void 0;
/**
 * Team attributes.
 */
class AuthNMappingTeamAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingTeamAttributes.attributeTypeMap;
    }
}
exports.AuthNMappingTeamAttributes = AuthNMappingTeamAttributes;
/**
 * @ignore
 */
AuthNMappingTeamAttributes.attributeTypeMap = {
    avatar: {
        baseName: "avatar",
        type: "string",
    },
    banner: {
        baseName: "banner",
        type: "number",
        format: "int64",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    linkCount: {
        baseName: "link_count",
        type: "number",
        format: "int32",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    summary: {
        baseName: "summary",
        type: "string",
    },
    userCount: {
        baseName: "user_count",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingTeamAttributes.js.map