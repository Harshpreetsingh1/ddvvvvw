"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedMonitor = void 0;
/**
 * Response from the delete monitor call.
 */
class DeletedMonitor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedMonitor.attributeTypeMap;
    }
}
exports.DeletedMonitor = DeletedMonitor;
/**
 * @ignore
 */
DeletedMonitor.attributeTypeMap = {
    deletedMonitorId: {
        baseName: "deleted_monitor_id",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedMonitor.js.map