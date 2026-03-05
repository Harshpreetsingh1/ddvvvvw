"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsUptime = void 0;
/**
 * Object containing the uptime information.
 */
class SyntheticsUptime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsUptime.attributeTypeMap;
    }
}
exports.SyntheticsUptime = SyntheticsUptime;
/**
 * @ignore
 */
SyntheticsUptime.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<SLOHistoryResponseErrorWithType>",
    },
    group: {
        baseName: "group",
        type: "string",
    },
    history: {
        baseName: "history",
        type: "Array<[number, number]>",
    },
    spanPrecision: {
        baseName: "span_precision",
        type: "number",
        format: "double",
    },
    uptime: {
        baseName: "uptime",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsUptime.js.map