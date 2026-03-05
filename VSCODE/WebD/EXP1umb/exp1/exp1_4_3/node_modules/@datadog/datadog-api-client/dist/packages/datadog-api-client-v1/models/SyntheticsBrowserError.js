"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserError = void 0;
/**
 * Error response object for a browser test.
 */
class SyntheticsBrowserError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserError.attributeTypeMap;
    }
}
exports.SyntheticsBrowserError = SyntheticsBrowserError;
/**
 * @ignore
 */
SyntheticsBrowserError.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "SyntheticsBrowserErrorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserError.js.map