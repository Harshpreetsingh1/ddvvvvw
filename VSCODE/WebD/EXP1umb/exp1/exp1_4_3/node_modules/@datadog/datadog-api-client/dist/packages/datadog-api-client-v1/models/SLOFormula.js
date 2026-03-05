"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOFormula = void 0;
/**
 * A formula that specifies how to combine the results of multiple queries.
 */
class SLOFormula {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOFormula.attributeTypeMap;
    }
}
exports.SLOFormula = SLOFormula;
/**
 * @ignore
 */
SLOFormula.attributeTypeMap = {
    formula: {
        baseName: "formula",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOFormula.js.map