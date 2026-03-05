"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCIBatchMetadataCI = void 0;
/**
 * Description of the CI provider.
 */
class SyntheticsCIBatchMetadataCI {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCIBatchMetadataCI.attributeTypeMap;
    }
}
exports.SyntheticsCIBatchMetadataCI = SyntheticsCIBatchMetadataCI;
/**
 * @ignore
 */
SyntheticsCIBatchMetadataCI.attributeTypeMap = {
    pipeline: {
        baseName: "pipeline",
        type: "SyntheticsCIBatchMetadataPipeline",
    },
    provider: {
        baseName: "provider",
        type: "SyntheticsCIBatchMetadataProvider",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCIBatchMetadataCI.js.map