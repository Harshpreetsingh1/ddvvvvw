"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSearchCountItem = void 0;
/**
 * A facet item.
 */
class MonitorSearchCountItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSearchCountItem.attributeTypeMap;
    }
}
exports.MonitorSearchCountItem = MonitorSearchCountItem;
/**
 * @ignore
 */
MonitorSearchCountItem.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSearchCountItem.js.map