"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookSplitBy = void 0;
/**
 * Object describing how to split the graph to display multiple visualizations per request.
 */
class NotebookSplitBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookSplitBy.attributeTypeMap;
    }
}
exports.NotebookSplitBy = NotebookSplitBy;
/**
 * @ignore
 */
NotebookSplitBy.attributeTypeMap = {
    keys: {
        baseName: "keys",
        type: "Array<string>",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookSplitBy.js.map