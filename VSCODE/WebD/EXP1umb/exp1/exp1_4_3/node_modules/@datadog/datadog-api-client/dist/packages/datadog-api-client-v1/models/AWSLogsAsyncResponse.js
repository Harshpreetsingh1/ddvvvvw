"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsAsyncResponse = void 0;
/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */
class AWSLogsAsyncResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsAsyncResponse.attributeTypeMap;
    }
}
exports.AWSLogsAsyncResponse = AWSLogsAsyncResponse;
/**
 * @ignore
 */
AWSLogsAsyncResponse.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<AWSLogsAsyncError>",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsAsyncResponse.js.map