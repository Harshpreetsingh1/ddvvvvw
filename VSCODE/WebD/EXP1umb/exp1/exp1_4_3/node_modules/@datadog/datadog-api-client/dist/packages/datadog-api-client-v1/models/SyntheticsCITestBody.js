"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCITestBody = void 0;
/**
 * Object describing the synthetics tests to trigger.
 */
class SyntheticsCITestBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCITestBody.attributeTypeMap;
    }
}
exports.SyntheticsCITestBody = SyntheticsCITestBody;
/**
 * @ignore
 */
SyntheticsCITestBody.attributeTypeMap = {
    tests: {
        baseName: "tests",
        type: "Array<SyntheticsCITest>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCITestBody.js.map