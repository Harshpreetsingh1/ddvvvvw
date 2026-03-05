"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillConfig = void 0;
/**
 * Bill config.
 */
class BillConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BillConfig.attributeTypeMap;
    }
}
exports.BillConfig = BillConfig;
/**
 * @ignore
 */
BillConfig.attributeTypeMap = {
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BillConfig.js.map