"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessQueryDefinition = void 0;
/**
 * The process query to use in the widget.
 */
class ProcessQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProcessQueryDefinition.attributeTypeMap;
    }
}
exports.ProcessQueryDefinition = ProcessQueryDefinition;
/**
 * @ignore
 */
ProcessQueryDefinition.attributeTypeMap = {
    filterBy: {
        baseName: "filter_by",
        type: "Array<string>",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
        required: true,
    },
    searchBy: {
        baseName: "search_by",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProcessQueryDefinition.js.map