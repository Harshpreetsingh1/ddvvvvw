"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitConfig = void 0;
/**
 * Encapsulates all user choices about how to split a graph.
 */
class SplitConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitConfig.attributeTypeMap;
    }
}
exports.SplitConfig = SplitConfig;
/**
 * @ignore
 */
SplitConfig.attributeTypeMap = {
    limit: {
        baseName: "limit",
        type: "number",
        required: true,
        format: "int64",
    },
    sort: {
        baseName: "sort",
        type: "SplitSort",
        required: true,
    },
    splitDimensions: {
        baseName: "split_dimensions",
        type: "[SplitDimension]",
        required: true,
    },
    staticSplits: {
        baseName: "static_splits",
        type: "Array<Array<SplitVectorEntryItem>>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitConfig.js.map