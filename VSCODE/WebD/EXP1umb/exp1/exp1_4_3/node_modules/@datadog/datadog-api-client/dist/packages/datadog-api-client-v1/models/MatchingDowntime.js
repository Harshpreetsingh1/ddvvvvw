"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchingDowntime = void 0;
/**
 * Object describing a downtime that matches this monitor.
 */
class MatchingDowntime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MatchingDowntime.attributeTypeMap;
    }
}
exports.MatchingDowntime = MatchingDowntime;
/**
 * @ignore
 */
MatchingDowntime.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    id: {
        baseName: "id",
        type: "number",
        required: true,
        format: "int64",
    },
    scope: {
        baseName: "scope",
        type: "Array<string>",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MatchingDowntime.js.map