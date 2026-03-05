"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsListResponse = void 0;
/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */
class AWSLogsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsListResponse.attributeTypeMap;
    }
}
exports.AWSLogsListResponse = AWSLogsListResponse;
/**
 * @ignore
 */
AWSLogsListResponse.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    lambdas: {
        baseName: "lambdas",
        type: "Array<AWSLogsLambda>",
    },
    services: {
        baseName: "services",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsListResponse.js.map