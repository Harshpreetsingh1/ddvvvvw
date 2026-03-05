"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITest = void 0;
/**
 * Object containing details about a Synthetic API test.
 */
class SyntheticsAPITest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITest.attributeTypeMap;
    }
}
exports.SyntheticsAPITest = SyntheticsAPITest;
/**
 * @ignore
 */
SyntheticsAPITest.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "SyntheticsAPITestConfig",
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
    subtype: {
        baseName: "subtype",
        type: "SyntheticsTestDetailsSubType",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "SyntheticsAPITestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPITest.js.map