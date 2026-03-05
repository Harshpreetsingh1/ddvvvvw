"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPatchTestBody = void 0;
/**
 * Wrapper around an array of [JSON Patch](https://jsonpatch.com) operations to perform on the test
 */
class SyntheticsPatchTestBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPatchTestBody.attributeTypeMap;
    }
}
exports.SyntheticsPatchTestBody = SyntheticsPatchTestBody;
/**
 * @ignore
 */
SyntheticsPatchTestBody.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SyntheticsPatchTestOperation>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPatchTestBody.js.map