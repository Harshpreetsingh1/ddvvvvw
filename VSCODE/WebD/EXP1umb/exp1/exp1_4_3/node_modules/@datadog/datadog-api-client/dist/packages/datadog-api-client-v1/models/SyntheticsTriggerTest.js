"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTriggerTest = void 0;
/**
 * Test configuration for Synthetics
 */
class SyntheticsTriggerTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTriggerTest.attributeTypeMap;
    }
}
exports.SyntheticsTriggerTest = SyntheticsTriggerTest;
/**
 * @ignore
 */
SyntheticsTriggerTest.attributeTypeMap = {
    metadata: {
        baseName: "metadata",
        type: "SyntheticsCIBatchMetadata",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTriggerTest.js.map