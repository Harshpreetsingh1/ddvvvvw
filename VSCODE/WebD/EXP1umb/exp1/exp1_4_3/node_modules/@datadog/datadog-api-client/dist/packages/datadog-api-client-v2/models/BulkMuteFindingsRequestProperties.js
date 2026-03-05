"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkMuteFindingsRequestProperties = void 0;
/**
 * Object containing the new mute properties of the findings.
 */
class BulkMuteFindingsRequestProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BulkMuteFindingsRequestProperties.attributeTypeMap;
    }
}
exports.BulkMuteFindingsRequestProperties = BulkMuteFindingsRequestProperties;
/**
 * @ignore
 */
BulkMuteFindingsRequestProperties.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    expirationDate: {
        baseName: "expiration_date",
        type: "number",
        format: "int64",
    },
    muted: {
        baseName: "muted",
        type: "boolean",
        required: true,
    },
    reason: {
        baseName: "reason",
        type: "FindingMuteReason",
        required: true,
    },
};
//# sourceMappingURL=BulkMuteFindingsRequestProperties.js.map