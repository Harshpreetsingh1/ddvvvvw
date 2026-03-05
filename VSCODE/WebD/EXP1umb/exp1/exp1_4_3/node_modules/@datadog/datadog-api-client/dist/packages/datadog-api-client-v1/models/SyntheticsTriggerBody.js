"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTriggerBody = void 0;
/**
 * Object describing the Synthetic tests to trigger.
 */
class SyntheticsTriggerBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTriggerBody.attributeTypeMap;
    }
}
exports.SyntheticsTriggerBody = SyntheticsTriggerBody;
/**
 * @ignore
 */
SyntheticsTriggerBody.attributeTypeMap = {
    tests: {
        baseName: "tests",
        type: "Array<SyntheticsTriggerTest>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTriggerBody.js.map