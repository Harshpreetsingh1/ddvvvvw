"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpu = void 0;
/**
 * CPU usage statistics derived from historical Spark job metrics. Provides multiple estimates so users can choose between conservative and cost-saving risk profiles.
 */
class Cpu {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Cpu.attributeTypeMap;
    }
}
exports.Cpu = Cpu;
/**
 * @ignore
 */
Cpu.attributeTypeMap = {
    max: {
        baseName: "max",
        type: "number",
        format: "int64",
    },
    p75: {
        baseName: "p75",
        type: "number",
        format: "int64",
    },
    p95: {
        baseName: "p95",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Cpu.js.map