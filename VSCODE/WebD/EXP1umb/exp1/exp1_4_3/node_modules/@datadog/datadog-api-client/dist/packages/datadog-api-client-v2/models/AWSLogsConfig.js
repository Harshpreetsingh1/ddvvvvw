"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsConfig = void 0;
/**
 * AWS Logs Collection config.
 */
class AWSLogsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsConfig.attributeTypeMap;
    }
}
exports.AWSLogsConfig = AWSLogsConfig;
/**
 * @ignore
 */
AWSLogsConfig.attributeTypeMap = {
    lambdaForwarder: {
        baseName: "lambda_forwarder",
        type: "AWSLambdaForwarderConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsConfig.js.map