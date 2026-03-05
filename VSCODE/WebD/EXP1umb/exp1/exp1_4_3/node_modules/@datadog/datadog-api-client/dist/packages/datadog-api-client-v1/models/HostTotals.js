"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostTotals = void 0;
/**
 * Total number of host currently monitored by Datadog.
 */
class HostTotals {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostTotals.attributeTypeMap;
    }
}
exports.HostTotals = HostTotals;
/**
 * @ignore
 */
HostTotals.attributeTypeMap = {
    totalActive: {
        baseName: "total_active",
        type: "number",
        format: "int64",
    },
    totalUp: {
        baseName: "total_up",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostTotals.js.map