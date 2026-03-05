"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsRequestData = void 0;
/**
 * Data object containing the new bulk mute properties of the finding.
 */
class BulkMuteFindingsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsRequestData.attributeTypeMap;
    }
}
exports.BulkMuteFindingsRequestData = BulkMuteFindingsRequestData;
/**
 * @ignore
 */
BulkMuteFindingsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BulkMuteFindingsRequestAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "BulkMuteFindingsRequestMeta",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FindingType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BulkMuteFindingsRequestData.js.map