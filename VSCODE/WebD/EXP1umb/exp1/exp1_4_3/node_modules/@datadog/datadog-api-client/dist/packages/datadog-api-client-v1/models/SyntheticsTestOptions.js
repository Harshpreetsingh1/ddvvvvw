"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestOptions = void 0;
/**
 * Object describing the extra options for a Synthetic test.
 */
class SyntheticsTestOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestOptions.attributeTypeMap;
    }
}
exports.SyntheticsTestOptions = SyntheticsTestOptions;
/**
 * @ignore
 */
SyntheticsTestOptions.attributeTypeMap = {
    acceptSelfSigned: {
        baseName: "accept_self_signed",
        type: "boolean",
    },
    allowInsecure: {
        baseName: "allow_insecure",
        type: "boolean",
    },
    blockedRequestPatterns: {
        baseName: "blockedRequestPatterns",
        type: "Array<string>",
    },
    checkCertificateRevocation: {
        baseName: "checkCertificateRevocation",
        type: "boolean",
    },
    ci: {
        baseName: "ci",
        type: "SyntheticsTestCiOptions",
    },
    deviceIds: {
        baseName: "device_ids",
        type: "Array<string>",
    },
    disableAiaIntermediateFetching: {
        baseName: "disableAiaIntermediateFetching",
        type: "boolean",
    },
    disableCors: {
        baseName: "disableCors",
        type: "boolean",
    },
    disableCsp: {
        baseName: "disableCsp",
        type: "boolean",
    },
    enableProfiling: {
        baseName: "enableProfiling",
        type: "boolean",
    },
    enableSecurityTesting: {
        baseName: "enableSecurityTesting",
        type: "boolean",
    },
    followRedirects: {
        baseName: "follow_redirects",
        type: "boolean",
    },
    httpVersion: {
        baseName: "httpVersion",
        type: "SyntheticsTestOptionsHTTPVersion",
    },
    ignoreServerCertificateError: {
        baseName: "ignoreServerCertificateError",
        type: "boolean",
    },
    initialNavigationTimeout: {
        baseName: "initialNavigationTimeout",
        type: "number",
        format: "int64",
    },
    minFailureDuration: {
        baseName: "min_failure_duration",
        type: "number",
        format: "int64",
    },
    minLocationFailed: {
        baseName: "min_location_failed",
        type: "number",
        format: "int64",
    },
    monitorName: {
        baseName: "monitor_name",
        type: "string",
    },
    monitorOptions: {
        baseName: "monitor_options",
        type: "SyntheticsTestOptionsMonitorOptions",
    },
    monitorPriority: {
        baseName: "monitor_priority",
        type: "number",
        format: "int32",
    },
    noScreenshot: {
        baseName: "noScreenshot",
        type: "boolean",
    },
    restrictedRoles: {
        baseName: "restricted_roles",
        type: "Array<string>",
    },
    retry: {
        baseName: "retry",
        type: "SyntheticsTestOptionsRetry",
    },
    rumSettings: {
        baseName: "rumSettings",
        type: "SyntheticsBrowserTestRumSettings",
    },
    scheduling: {
        baseName: "scheduling",
        type: "SyntheticsTestOptionsScheduling",
    },
    tickEvery: {
        baseName: "tick_every",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestOptions.js.map