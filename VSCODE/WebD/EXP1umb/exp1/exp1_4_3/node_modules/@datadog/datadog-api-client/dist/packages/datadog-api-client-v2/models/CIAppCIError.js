"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppCIError = void 0;
/**
 * Contains information of the CI error.
 */
class CIAppCIError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppCIError.attributeTypeMap;
    }
}
exports.CIAppCIError = CIAppCIError;
/**
 * @ignore
 */
CIAppCIError.attributeTypeMap = {
    domain: {
        baseName: "domain",
        type: "CIAppCIErrorDomain",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    stack: {
        baseName: "stack",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppCIError.js.map