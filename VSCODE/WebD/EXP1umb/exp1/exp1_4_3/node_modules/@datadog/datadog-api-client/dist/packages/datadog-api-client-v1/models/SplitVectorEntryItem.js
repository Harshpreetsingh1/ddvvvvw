"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitVectorEntryItem = void 0;
/**
 * The split graph list contains a graph for each value of the split dimension.
 */
class SplitVectorEntryItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitVectorEntryItem.attributeTypeMap;
    }
}
exports.SplitVectorEntryItem = SplitVectorEntryItem;
/**
 * @ignore
 */
SplitVectorEntryItem.attributeTypeMap = {
    tagKey: {
        baseName: "tag_key",
        type: "string",
        required: true,
    },
    tagValues: {
        baseName: "tag_values",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitVectorEntryItem.js.map