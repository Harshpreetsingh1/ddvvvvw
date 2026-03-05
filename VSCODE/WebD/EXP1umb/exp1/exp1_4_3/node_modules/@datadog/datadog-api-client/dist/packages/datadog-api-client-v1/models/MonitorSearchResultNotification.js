"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSearchResultNotification = void 0;
/**
 * A notification triggered by the monitor.
 */
class MonitorSearchResultNotification {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSearchResultNotification.attributeTypeMap;
    }
}
exports.MonitorSearchResultNotification = MonitorSearchResultNotification;
/**
 * @ignore
 */
MonitorSearchResultNotification.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSearchResultNotification.js.map