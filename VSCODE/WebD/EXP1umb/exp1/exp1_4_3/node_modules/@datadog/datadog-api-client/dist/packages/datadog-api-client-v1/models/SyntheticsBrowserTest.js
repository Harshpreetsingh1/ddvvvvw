"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTest = void 0;
/**
 * Object containing details about a Synthetic browser test.
 */
class SyntheticsBrowserTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTest.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTest = SyntheticsBrowserTest;
/**
 * @ignore
 */
SyntheticsBrowserTest.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "SyntheticsBrowserTestConfig",
        required: true,
    },
    locations: {
        baseName: "locations",
        type: "Array<string>",
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "SyntheticsTestOptions",
        required: true,
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "SyntheticsTestPauseStatus",
    },
    steps: {
        baseName: "steps",
        type: "Array<SyntheticsStep>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "SyntheticsBrowserTestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTest.js.map