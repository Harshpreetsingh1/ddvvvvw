"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCIBatchMetadataPipeline = void 0;
/**
 * Description of the CI pipeline.
 */
class SyntheticsCIBatchMetadataPipeline {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCIBatchMetadataPipeline.attributeTypeMap;
    }
}
exports.SyntheticsCIBatchMetadataPipeline = SyntheticsCIBatchMetadataPipeline;
/**
 * @ignore
 */
SyntheticsCIBatchMetadataPipeline.attributeTypeMap = {
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCIBatchMetadataPipeline.js.map