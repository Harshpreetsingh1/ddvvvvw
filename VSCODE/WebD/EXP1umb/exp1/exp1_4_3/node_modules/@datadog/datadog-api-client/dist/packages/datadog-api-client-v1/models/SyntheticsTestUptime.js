"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestUptime = void 0;
/**
 * Object containing the uptime for a Synthetic test ID.
 */
class SyntheticsTestUptime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestUptime.attributeTypeMap;
    }
}
exports.SyntheticsTestUptime = SyntheticsTestUptime;
/**
 * @ignore
 */
SyntheticsTestUptime.attributeTypeMap = {
    fromTs: {
        baseName: "from_ts",
        type: "number",
        format: "int64",
    },
    overall: {
        baseName: "overall",
        type: "SyntheticsUptime",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    toTs: {
        baseName: "to_ts",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestUptime.js.map