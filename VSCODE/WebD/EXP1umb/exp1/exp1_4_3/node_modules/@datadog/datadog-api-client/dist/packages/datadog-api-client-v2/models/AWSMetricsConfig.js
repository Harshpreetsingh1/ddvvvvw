"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSMetricsConfig = void 0;
/**
 * AWS Metrics Collection config.
 */
class AWSMetricsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSMetricsConfig.attributeTypeMap;
    }
}
exports.AWSMetricsConfig = AWSMetricsConfig;
/**
 * @ignore
 */
AWSMetricsConfig.attributeTypeMap = {
    automuteEnabled: {
        baseName: "automute_enabled",
        type: "boolean",
    },
    collectCloudwatchAlarms: {
        baseName: "collect_cloudwatch_alarms",
        type: "boolean",
    },
    collectCustomMetrics: {
        baseName: "collect_custom_metrics",
        type: "boolean",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    namespaceFilters: {
        baseName: "namespace_filters",
        type: "AWSNamespaceFilters",
    },
    tagFilters: {
        baseName: "tag_filters",
        type: "Array<AWSNamespaceTagFilter>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSMetricsConfig.js.map