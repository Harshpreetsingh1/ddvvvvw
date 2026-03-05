"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitSort = void 0;
/**
 * Controls the order in which graphs appear in the split.
 */
class SplitSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitSort.attributeTypeMap;
    }
}
exports.SplitSort = SplitSort;
/**
 * @ignore
 */
SplitSort.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "SplitConfigSortCompute",
    },
    order: {
        baseName: "order",
        type: "WidgetSort",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitSort.js.map