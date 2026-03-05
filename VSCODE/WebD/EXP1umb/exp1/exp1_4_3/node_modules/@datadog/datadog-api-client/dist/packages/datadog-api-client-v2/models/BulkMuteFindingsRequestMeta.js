"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsRequestMeta = void 0;
/**
 * Meta object containing the findings to be updated.
 */
class BulkMuteFindingsRequestMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsRequestMeta.attributeTypeMap;
    }
}
exports.BulkMuteFindingsRequestMeta = BulkMuteFindingsRequestMeta;
/**
 * @ignore
 */
BulkMuteFindingsRequestMeta.attributeTypeMap = {
    findings: {
        baseName: "findings",
        type: "Array<BulkMuteFindingsRequestMetaFindings>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkMuteFindingsRequestMeta.js.map