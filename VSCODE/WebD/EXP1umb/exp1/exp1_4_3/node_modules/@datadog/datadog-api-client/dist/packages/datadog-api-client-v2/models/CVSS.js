"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CVSS = void 0;
/**
 * Vulnerability severity.
 */
class CVSS {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CVSS.attributeTypeMap;
    }
}
exports.CVSS = CVSS;
/**
 * @ignore
 */
CVSS.attributeTypeMap = {
    score: {
        baseName: "score",
        type: "number",
        required: true,
        format: "double",
    },
    severity: {
        baseName: "severity",
        type: "VulnerabilitySeverity",
        required: true,
    },
    vector: {
        baseName: "vector",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CVSS.js.map