"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCIBatchMetadata = void 0;
/**
 * Metadata for the Synthetic tests run.
 */
class SyntheticsCIBatchMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCIBatchMetadata.attributeTypeMap;
    }
}
exports.SyntheticsCIBatchMetadata = SyntheticsCIBatchMetadata;
/**
 * @ignore
 */
SyntheticsCIBatchMetadata.attributeTypeMap = {
    ci: {
        baseName: "ci",
        type: "SyntheticsCIBatchMetadataCI",
    },
    git: {
        baseName: "git",
        type: "SyntheticsCIBatchMetadataGit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCIBatchMetadata.js.map