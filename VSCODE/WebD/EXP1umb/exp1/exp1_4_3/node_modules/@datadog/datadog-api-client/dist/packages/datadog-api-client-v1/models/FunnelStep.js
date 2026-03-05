"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelStep = void 0;
/**
 * The funnel step.
 */
class FunnelStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FunnelStep.attributeTypeMap;
    }
}
exports.FunnelStep = FunnelStep;
/**
 * @ignore
 */
FunnelStep.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FunnelStep.js.map