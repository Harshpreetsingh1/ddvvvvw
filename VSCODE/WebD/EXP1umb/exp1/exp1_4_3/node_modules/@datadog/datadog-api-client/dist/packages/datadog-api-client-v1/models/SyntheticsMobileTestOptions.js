"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileTestOptions = void 0;
/**
 * Object describing the extra options for a Synthetic test.
 */
class SyntheticsMobileTestOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileTestOptions.attributeTypeMap;
    }
}
exports.SyntheticsMobileTestOptions = SyntheticsMobileTestOptions;
/**
 * @ignore
 */
SyntheticsMobileTestOptions.attributeTypeMap = {
    allowApplicationCrash: {
        baseName: "allowApplicationCrash",
        type: "boolean",
    },
    bindings: {
        baseName: "bindings",
        type: "Array<SyntheticsTestRestrictionPolicyBinding>",
    },
    ci: {
        baseName: "ci",
        type: "SyntheticsTestCiOptions",
    },
    defaultStepTimeout: {
        baseName: "defaultStepTimeout",
        type: "number",
        format: "int32",
    },
    deviceIds: {
        baseName: "device_ids",
        type: "Array<string>",
        required: true,
    },
    disableAutoAcceptAlert: {
        baseName: "disableAutoAcceptAlert",
        type: "boolean",
    },
    minFailureDuration: {
        baseName: "min_failure_duration",
        type: "number",
        format: "int64",
    },
    mobileApplication: {
        baseName: "mobileApplication",
        type: "SyntheticsMobileTestsMobileApplication",
        required: true,
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
    scheduling: {
        baseName: "scheduling",
        type: "SyntheticsTestOptionsScheduling",
    },
    tickEvery: {
        baseName: "tick_every",
        type: "number",
        required: true,
        format: "int64",
    },
    verbosity: {
        baseName: "verbosity",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileTestOptions.js.map