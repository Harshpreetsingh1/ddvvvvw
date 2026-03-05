"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookAbsoluteTime = void 0;
/**
 * Absolute timeframe.
 */
class NotebookAbsoluteTime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookAbsoluteTime.attributeTypeMap;
    }
}
exports.NotebookAbsoluteTime = NotebookAbsoluteTime;
/**
 * @ignore
 */
NotebookAbsoluteTime.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "Date",
        required: true,
        format: "date-time",
    },
    live: {
        baseName: "live",
        type: "boolean",
    },
    start: {
        baseName: "start",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookAbsoluteTime.js.map