"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileTest = void 0;
/**
 * Object containing details about a Synthetic mobile test.
 */
class SyntheticsMobileTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileTest.attributeTypeMap;
    }
}
exports.SyntheticsMobileTest = SyntheticsMobileTest;
/**
 * @ignore
 */
SyntheticsMobileTest.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "SyntheticsMobileTestConfig",
        required: true,
    },
    deviceIds: {
        baseName: "device_ids",
        type: "Array<string>",
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
        type: "SyntheticsMobileTestOptions",
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
        type: "Array<SyntheticsMobileStep>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "SyntheticsMobileTestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileTest.js.map