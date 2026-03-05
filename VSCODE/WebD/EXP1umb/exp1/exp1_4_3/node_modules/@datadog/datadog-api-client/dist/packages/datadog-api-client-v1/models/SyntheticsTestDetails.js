"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestDetails = void 0;
/**
 * Object containing details about your Synthetic test.
 */
class SyntheticsTestDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestDetails.attributeTypeMap;
    }
}
exports.SyntheticsTestDetails = SyntheticsTestDetails;
/**
 * @ignore
 */
SyntheticsTestDetails.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "SyntheticsTestConfig",
    },
    creator: {
        baseName: "creator",
        type: "Creator",
    },
    locations: {
        baseName: "locations",
        type: "Array<string>",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    options: {
        baseName: "options",
        type: "SyntheticsTestOptions",
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
        type: "SyntheticsTestDetailsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestDetails.js.map