"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfig = void 0;
/**
 * Azure config.
 */
class AzureUCConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfig.attributeTypeMap;
    }
}
exports.AzureUCConfig = AzureUCConfig;
/**
 * @ignore
 */
AzureUCConfig.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    clientId: {
        baseName: "client_id",
        type: "string",
        required: true,
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    datasetType: {
        baseName: "dataset_type",
        type: "string",
        required: true,
    },
    errorMessages: {
        baseName: "error_messages",
        type: "Array<string>",
    },
    exportName: {
        baseName: "export_name",
        type: "string",
        required: true,
    },
    exportPath: {
        baseName: "export_path",
        type: "string",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    months: {
        baseName: "months",
        type: "number",
        format: "int32",
    },
    scope: {
        baseName: "scope",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "string",
        required: true,
    },
    statusUpdatedAt: {
        baseName: "status_updated_at",
        type: "string",
    },
    storageAccount: {
        baseName: "storage_account",
        type: "string",
        required: true,
    },
    storageContainer: {
        baseName: "storage_container",
        type: "string",
        required: true,
    },
    updatedAt: {
        baseName: "updated_at",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfig.js.map