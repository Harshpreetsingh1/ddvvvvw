"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsIndexesOrder = void 0;
/**
 * Object containing the ordered list of log index names.
 */
class LogsIndexesOrder {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsIndexesOrder.attributeTypeMap;
    }
}
exports.LogsIndexesOrder = LogsIndexesOrder;
/**
 * @ignore
 */
LogsIndexesOrder.attributeTypeMap = {
    indexNames: {
        baseName: "index_names",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsIndexesOrder.js.map