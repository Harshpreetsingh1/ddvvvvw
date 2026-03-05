"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMeta = void 0;
/**
 * Metadata of an app.
 */
class AppMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AppMeta.attributeTypeMap;
    }
}
exports.AppMeta = AppMeta;
/**
 * @ignore
 */
AppMeta.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    deletedAt: {
        baseName: "deleted_at",
        type: "Date",
        format: "date-time",
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        format: "int64",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        format: "date-time",
    },
    updatedSinceDeployment: {
        baseName: "updated_since_deployment",
        type: "boolean",
    },
    userId: {
        baseName: "user_id",
        type: "number",
        format: "int64",
    },
    userName: {
        baseName: "user_name",
        type: "string",
    },
    userUuid: {
        baseName: "user_uuid",
        type: "string",
        format: "uuid",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AppMeta.js.map