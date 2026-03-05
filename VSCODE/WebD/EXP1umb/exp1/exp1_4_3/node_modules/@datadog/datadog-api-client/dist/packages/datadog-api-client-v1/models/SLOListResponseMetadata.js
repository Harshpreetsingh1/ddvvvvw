"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOListResponseMetadata = void 0;
/**
 * The metadata object containing additional information about the list of SLOs.
 */
class SLOListResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOListResponseMetadata.attributeTypeMap;
    }
}
exports.SLOListResponseMetadata = SLOListResponseMetadata;
/**
 * @ignore
 */
SLOListResponseMetadata.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "SLOListResponseMetadataPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOListResponseMetadata.js.map