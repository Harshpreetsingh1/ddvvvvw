"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaData = void 0;
/**
 * Configuration of the schema data to use.
 */
class LogsSchemaData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaData.attributeTypeMap;
    }
}
exports.LogsSchemaData = LogsSchemaData;
/**
 * @ignore
 */
LogsSchemaData.attributeTypeMap = {
    className: {
        baseName: "class_name",
        type: "string",
        required: true,
    },
    classUid: {
        baseName: "class_uid",
        type: "number",
        required: true,
        format: "int64",
    },
    profiles: {
        baseName: "profiles",
        type: "Array<string>",
    },
    schemaType: {
        baseName: "schema_type",
        type: "string",
        required: true,
    },
    version: {
        baseName: "version",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsSchemaData.js.map