"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLambdaForwarderConfigLogSourceConfig = void 0;
/**
 * Log source configuration.
 */
class AWSLambdaForwarderConfigLogSourceConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLambdaForwarderConfigLogSourceConfig.attributeTypeMap;
    }
}
exports.AWSLambdaForwarderConfigLogSourceConfig = AWSLambdaForwarderConfigLogSourceConfig;
/**
 * @ignore
 */
AWSLambdaForwarderConfigLogSourceConfig.attributeTypeMap = {
    tagFilters: {
        baseName: "tag_filters",
        type: "Array<AWSLogSourceTagFilter>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLambdaForwarderConfigLogSourceConfig.js.map