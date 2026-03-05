"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPatchTestOperation = void 0;
/**
 * A single [JSON Patch](https://jsonpatch.com) operation to perform on the test
 */
class SyntheticsPatchTestOperation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPatchTestOperation.attributeTypeMap;
    }
}
exports.SyntheticsPatchTestOperation = SyntheticsPatchTestOperation;
/**
 * @ignore
 */
SyntheticsPatchTestOperation.attributeTypeMap = {
    op: {
        baseName: "op",
        type: "SyntheticsPatchTestOperationName",
    },
    path: {
        baseName: "path",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPatchTestOperation.js.map