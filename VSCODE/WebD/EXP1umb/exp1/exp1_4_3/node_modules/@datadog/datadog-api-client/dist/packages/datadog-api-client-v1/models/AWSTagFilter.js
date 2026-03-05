"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSTagFilter = void 0;
/**
 * A tag filter.
 */
class AWSTagFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSTagFilter.attributeTypeMap;
    }
}
exports.AWSTagFilter = AWSTagFilter;
/**
 * @ignore
 */
AWSTagFilter.attributeTypeMap = {
    namespace: {
        baseName: "namespace",
        type: "AWSNamespace",
    },
    tagFilterStr: {
        baseName: "tag_filter_str",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSTagFilter.js.map