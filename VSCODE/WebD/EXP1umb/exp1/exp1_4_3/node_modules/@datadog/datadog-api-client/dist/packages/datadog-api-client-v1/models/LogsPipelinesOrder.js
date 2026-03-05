"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsPipelinesOrder = void 0;
/**
 * Object containing the ordered list of pipeline IDs.
 */
class LogsPipelinesOrder {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsPipelinesOrder.attributeTypeMap;
    }
}
exports.LogsPipelinesOrder = LogsPipelinesOrder;
/**
 * @ignore
 */
LogsPipelinesOrder.attributeTypeMap = {
    pipelineIds: {
        baseName: "pipeline_ids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsPipelinesOrder.js.map