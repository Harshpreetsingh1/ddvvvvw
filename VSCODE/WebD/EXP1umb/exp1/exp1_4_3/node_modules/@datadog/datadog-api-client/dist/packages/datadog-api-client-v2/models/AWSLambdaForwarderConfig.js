"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLambdaForwarderConfig = void 0;
/**
 * Log Autosubscription configuration for Datadog Forwarder Lambda functions.
 * Automatically set up triggers for existing and new logs for some services,
 * ensuring no logs from new resources are missed and saving time spent on manual configuration.
 */
class AWSLambdaForwarderConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLambdaForwarderConfig.attributeTypeMap;
    }
}
exports.AWSLambdaForwarderConfig = AWSLambdaForwarderConfig;
/**
 * @ignore
 */
AWSLambdaForwarderConfig.attributeTypeMap = {
    lambdas: {
        baseName: "lambdas",
        type: "Array<string>",
    },
    logSourceConfig: {
        baseName: "log_source_config",
        type: "AWSLambdaForwarderConfigLogSourceConfig",
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLambdaForwarderConfig.js.map