"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSTracesConfig = void 0;
/**
 * AWS Traces Collection config.
 */
class AWSTracesConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSTracesConfig.attributeTypeMap;
    }
}
exports.AWSTracesConfig = AWSTracesConfig;
/**
 * @ignore
 */
AWSTracesConfig.attributeTypeMap = {
    xrayServices: {
        baseName: "xray_services",
        type: "XRayServicesList",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSTracesConfig.js.map