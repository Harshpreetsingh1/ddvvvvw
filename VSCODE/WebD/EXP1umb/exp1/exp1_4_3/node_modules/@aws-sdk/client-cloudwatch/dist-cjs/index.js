'use strict';

var middlewareHostHeader = require('@aws-sdk/middleware-host-header');
var middlewareLogger = require('@aws-sdk/middleware-logger');
var middlewareRecursionDetection = require('@aws-sdk/middleware-recursion-detection');
var middlewareUserAgent = require('@aws-sdk/middleware-user-agent');
var configResolver = require('@smithy/config-resolver');
var core = require('@smithy/core');
var schema = require('@smithy/core/schema');
var middlewareCompression = require('@smithy/middleware-compression');
var middlewareContentLength = require('@smithy/middleware-content-length');
var middlewareEndpoint = require('@smithy/middleware-endpoint');
var middlewareRetry = require('@smithy/middleware-retry');
var smithyClient = require('@smithy/smithy-client');
var httpAuthSchemeProvider = require('./auth/httpAuthSchemeProvider');
var runtimeConfig = require('./runtimeConfig');
var regionConfigResolver = require('@aws-sdk/region-config-resolver');
var protocolHttp = require('@smithy/protocol-http');
var schemas_0 = require('./schemas/schemas_0');
var utilWaiter = require('@smithy/util-waiter');
var errors = require('./models/errors');
var CloudWatchServiceException = require('./models/CloudWatchServiceException');

const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "monitoring",
    });
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig), smithyClient.getDefaultExtensionConfiguration(runtimeConfig), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

class CloudWatchClient extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
        const _config_4 = configResolver.resolveRegionConfig(_config_3);
        const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
        const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
        const _config_7 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = middlewareCompression.resolveCompressionConfig(_config_7);
        const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
        this.config = _config_9;
        this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultCloudWatchHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": config.credentials,
            }),
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class DeleteAlarmMuteRuleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DeleteAlarmMuteRule", {})
    .n("CloudWatchClient", "DeleteAlarmMuteRuleCommand")
    .sc(schemas_0.DeleteAlarmMuteRule$)
    .build() {
}

class DeleteAlarmsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DeleteAlarms", {})
    .n("CloudWatchClient", "DeleteAlarmsCommand")
    .sc(schemas_0.DeleteAlarms$)
    .build() {
}

class DeleteAnomalyDetectorCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DeleteAnomalyDetector", {})
    .n("CloudWatchClient", "DeleteAnomalyDetectorCommand")
    .sc(schemas_0.DeleteAnomalyDetector$)
    .build() {
}

class DeleteDashboardsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DeleteDashboards", {})
    .n("CloudWatchClient", "DeleteDashboardsCommand")
    .sc(schemas_0.DeleteDashboards$)
    .build() {
}

class DeleteInsightRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DeleteInsightRules", {})
    .n("CloudWatchClient", "DeleteInsightRulesCommand")
    .sc(schemas_0.DeleteInsightRules$)
    .build() {
}

class DeleteMetricStreamCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DeleteMetricStream", {})
    .n("CloudWatchClient", "DeleteMetricStreamCommand")
    .sc(schemas_0.DeleteMetricStream$)
    .build() {
}

class DescribeAlarmContributorsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DescribeAlarmContributors", {})
    .n("CloudWatchClient", "DescribeAlarmContributorsCommand")
    .sc(schemas_0.DescribeAlarmContributors$)
    .build() {
}

class DescribeAlarmHistoryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DescribeAlarmHistory", {})
    .n("CloudWatchClient", "DescribeAlarmHistoryCommand")
    .sc(schemas_0.DescribeAlarmHistory$)
    .build() {
}

class DescribeAlarmsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DescribeAlarms", {})
    .n("CloudWatchClient", "DescribeAlarmsCommand")
    .sc(schemas_0.DescribeAlarms$)
    .build() {
}

class DescribeAlarmsForMetricCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DescribeAlarmsForMetric", {})
    .n("CloudWatchClient", "DescribeAlarmsForMetricCommand")
    .sc(schemas_0.DescribeAlarmsForMetric$)
    .build() {
}

class DescribeAnomalyDetectorsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DescribeAnomalyDetectors", {})
    .n("CloudWatchClient", "DescribeAnomalyDetectorsCommand")
    .sc(schemas_0.DescribeAnomalyDetectors$)
    .build() {
}

class DescribeInsightRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DescribeInsightRules", {})
    .n("CloudWatchClient", "DescribeInsightRulesCommand")
    .sc(schemas_0.DescribeInsightRules$)
    .build() {
}

class DisableAlarmActionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DisableAlarmActions", {})
    .n("CloudWatchClient", "DisableAlarmActionsCommand")
    .sc(schemas_0.DisableAlarmActions$)
    .build() {
}

class DisableInsightRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "DisableInsightRules", {})
    .n("CloudWatchClient", "DisableInsightRulesCommand")
    .sc(schemas_0.DisableInsightRules$)
    .build() {
}

class EnableAlarmActionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "EnableAlarmActions", {})
    .n("CloudWatchClient", "EnableAlarmActionsCommand")
    .sc(schemas_0.EnableAlarmActions$)
    .build() {
}

class EnableInsightRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "EnableInsightRules", {})
    .n("CloudWatchClient", "EnableInsightRulesCommand")
    .sc(schemas_0.EnableInsightRules$)
    .build() {
}

class GetAlarmMuteRuleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetAlarmMuteRule", {})
    .n("CloudWatchClient", "GetAlarmMuteRuleCommand")
    .sc(schemas_0.GetAlarmMuteRule$)
    .build() {
}

class GetDashboardCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetDashboard", {})
    .n("CloudWatchClient", "GetDashboardCommand")
    .sc(schemas_0.GetDashboard$)
    .build() {
}

class GetInsightRuleReportCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetInsightRuleReport", {})
    .n("CloudWatchClient", "GetInsightRuleReportCommand")
    .sc(schemas_0.GetInsightRuleReport$)
    .build() {
}

class GetMetricDataCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetMetricData", {})
    .n("CloudWatchClient", "GetMetricDataCommand")
    .sc(schemas_0.GetMetricData$)
    .build() {
}

class GetMetricStatisticsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetMetricStatistics", {})
    .n("CloudWatchClient", "GetMetricStatisticsCommand")
    .sc(schemas_0.GetMetricStatistics$)
    .build() {
}

class GetMetricStreamCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetMetricStream", {})
    .n("CloudWatchClient", "GetMetricStreamCommand")
    .sc(schemas_0.GetMetricStream$)
    .build() {
}

class GetMetricWidgetImageCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetMetricWidgetImage", {})
    .n("CloudWatchClient", "GetMetricWidgetImageCommand")
    .sc(schemas_0.GetMetricWidgetImage$)
    .build() {
}

class ListAlarmMuteRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "ListAlarmMuteRules", {})
    .n("CloudWatchClient", "ListAlarmMuteRulesCommand")
    .sc(schemas_0.ListAlarmMuteRules$)
    .build() {
}

class ListDashboardsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "ListDashboards", {})
    .n("CloudWatchClient", "ListDashboardsCommand")
    .sc(schemas_0.ListDashboards$)
    .build() {
}

class ListManagedInsightRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "ListManagedInsightRules", {})
    .n("CloudWatchClient", "ListManagedInsightRulesCommand")
    .sc(schemas_0.ListManagedInsightRules$)
    .build() {
}

class ListMetricsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "ListMetrics", {})
    .n("CloudWatchClient", "ListMetricsCommand")
    .sc(schemas_0.ListMetrics$)
    .build() {
}

class ListMetricStreamsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "ListMetricStreams", {})
    .n("CloudWatchClient", "ListMetricStreamsCommand")
    .sc(schemas_0.ListMetricStreams$)
    .build() {
}

class ListTagsForResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "ListTagsForResource", {})
    .n("CloudWatchClient", "ListTagsForResourceCommand")
    .sc(schemas_0.ListTagsForResource$)
    .build() {
}

class PutAlarmMuteRuleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutAlarmMuteRule", {})
    .n("CloudWatchClient", "PutAlarmMuteRuleCommand")
    .sc(schemas_0.PutAlarmMuteRule$)
    .build() {
}

class PutAnomalyDetectorCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutAnomalyDetector", {})
    .n("CloudWatchClient", "PutAnomalyDetectorCommand")
    .sc(schemas_0.PutAnomalyDetector$)
    .build() {
}

class PutCompositeAlarmCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutCompositeAlarm", {})
    .n("CloudWatchClient", "PutCompositeAlarmCommand")
    .sc(schemas_0.PutCompositeAlarm$)
    .build() {
}

class PutDashboardCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutDashboard", {})
    .n("CloudWatchClient", "PutDashboardCommand")
    .sc(schemas_0.PutDashboard$)
    .build() {
}

class PutInsightRuleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutInsightRule", {})
    .n("CloudWatchClient", "PutInsightRuleCommand")
    .sc(schemas_0.PutInsightRule$)
    .build() {
}

class PutManagedInsightRulesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutManagedInsightRules", {})
    .n("CloudWatchClient", "PutManagedInsightRulesCommand")
    .sc(schemas_0.PutManagedInsightRules$)
    .build() {
}

class PutMetricAlarmCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutMetricAlarm", {})
    .n("CloudWatchClient", "PutMetricAlarmCommand")
    .sc(schemas_0.PutMetricAlarm$)
    .build() {
}

class PutMetricDataCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        middlewareCompression.getCompressionPlugin(config, {
            'encodings': ['gzip'],
        }),
    ];
})
    .s("GraniteServiceVersion20100801", "PutMetricData", {})
    .n("CloudWatchClient", "PutMetricDataCommand")
    .sc(schemas_0.PutMetricData$)
    .build() {
}

class PutMetricStreamCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "PutMetricStream", {})
    .n("CloudWatchClient", "PutMetricStreamCommand")
    .sc(schemas_0.PutMetricStream$)
    .build() {
}

class SetAlarmStateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "SetAlarmState", {})
    .n("CloudWatchClient", "SetAlarmStateCommand")
    .sc(schemas_0.SetAlarmState$)
    .build() {
}

class StartMetricStreamsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "StartMetricStreams", {})
    .n("CloudWatchClient", "StartMetricStreamsCommand")
    .sc(schemas_0.StartMetricStreams$)
    .build() {
}

class StopMetricStreamsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "StopMetricStreams", {})
    .n("CloudWatchClient", "StopMetricStreamsCommand")
    .sc(schemas_0.StopMetricStreams$)
    .build() {
}

class TagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "TagResource", {})
    .n("CloudWatchClient", "TagResourceCommand")
    .sc(schemas_0.TagResource$)
    .build() {
}

class UntagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "UntagResource", {})
    .n("CloudWatchClient", "UntagResourceCommand")
    .sc(schemas_0.UntagResource$)
    .build() {
}

const paginateDescribeAlarmHistory = core.createPaginator(CloudWatchClient, DescribeAlarmHistoryCommand, "NextToken", "NextToken", "MaxRecords");

const paginateDescribeAlarms = core.createPaginator(CloudWatchClient, DescribeAlarmsCommand, "NextToken", "NextToken", "MaxRecords");

const paginateDescribeAnomalyDetectors = core.createPaginator(CloudWatchClient, DescribeAnomalyDetectorsCommand, "NextToken", "NextToken", "MaxResults");

const paginateDescribeInsightRules = core.createPaginator(CloudWatchClient, DescribeInsightRulesCommand, "NextToken", "NextToken", "MaxResults");

const paginateGetMetricData = core.createPaginator(CloudWatchClient, GetMetricDataCommand, "NextToken", "NextToken", "MaxDatapoints");

const paginateListAlarmMuteRules = core.createPaginator(CloudWatchClient, ListAlarmMuteRulesCommand, "NextToken", "NextToken", "MaxRecords");

const paginateListDashboards = core.createPaginator(CloudWatchClient, ListDashboardsCommand, "NextToken", "NextToken", "");

const paginateListManagedInsightRules = core.createPaginator(CloudWatchClient, ListManagedInsightRulesCommand, "NextToken", "NextToken", "MaxResults");

const paginateListMetrics = core.createPaginator(CloudWatchClient, ListMetricsCommand, "NextToken", "NextToken", "");

const paginateListMetricStreams = core.createPaginator(CloudWatchClient, ListMetricStreamsCommand, "NextToken", "NextToken", "MaxResults");

const checkState$2 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAlarmsCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.MetricAlarms);
                return (flat_1.length > 0);
            };
            if (returnComparator() == true) {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForAlarmExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
};
const waitUntilAlarmExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
    return utilWaiter.checkExceptions(result);
};

const checkState$1 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetAlarmMuteRuleCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForAlarmMuteRuleExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
};
const waitUntilAlarmMuteRuleExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
    return utilWaiter.checkExceptions(result);
};

const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAlarmsCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                let flat_1 = [].concat(...result.CompositeAlarms);
                return (flat_1.length > 0);
            };
            if (returnComparator() == true) {
                return { state: utilWaiter.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForCompositeAlarmExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilCompositeAlarmExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return utilWaiter.checkExceptions(result);
};

const commands = {
    DeleteAlarmMuteRuleCommand,
    DeleteAlarmsCommand,
    DeleteAnomalyDetectorCommand,
    DeleteDashboardsCommand,
    DeleteInsightRulesCommand,
    DeleteMetricStreamCommand,
    DescribeAlarmContributorsCommand,
    DescribeAlarmHistoryCommand,
    DescribeAlarmsCommand,
    DescribeAlarmsForMetricCommand,
    DescribeAnomalyDetectorsCommand,
    DescribeInsightRulesCommand,
    DisableAlarmActionsCommand,
    DisableInsightRulesCommand,
    EnableAlarmActionsCommand,
    EnableInsightRulesCommand,
    GetAlarmMuteRuleCommand,
    GetDashboardCommand,
    GetInsightRuleReportCommand,
    GetMetricDataCommand,
    GetMetricStatisticsCommand,
    GetMetricStreamCommand,
    GetMetricWidgetImageCommand,
    ListAlarmMuteRulesCommand,
    ListDashboardsCommand,
    ListManagedInsightRulesCommand,
    ListMetricsCommand,
    ListMetricStreamsCommand,
    ListTagsForResourceCommand,
    PutAlarmMuteRuleCommand,
    PutAnomalyDetectorCommand,
    PutCompositeAlarmCommand,
    PutDashboardCommand,
    PutInsightRuleCommand,
    PutManagedInsightRulesCommand,
    PutMetricAlarmCommand,
    PutMetricDataCommand,
    PutMetricStreamCommand,
    SetAlarmStateCommand,
    StartMetricStreamsCommand,
    StopMetricStreamsCommand,
    TagResourceCommand,
    UntagResourceCommand,
};
const paginators = {
    paginateDescribeAlarmHistory,
    paginateDescribeAlarms,
    paginateDescribeAnomalyDetectors,
    paginateDescribeInsightRules,
    paginateGetMetricData,
    paginateListAlarmMuteRules,
    paginateListDashboards,
    paginateListManagedInsightRules,
    paginateListMetrics,
    paginateListMetricStreams,
};
const waiters = {
    waitUntilAlarmExists,
    waitUntilCompositeAlarmExists,
    waitUntilAlarmMuteRuleExists,
};
class CloudWatch extends CloudWatchClient {
}
smithyClient.createAggregatedClient(commands, CloudWatch, { paginators, waiters });

const ActionsSuppressedBy = {
    Alarm: "Alarm",
    ExtensionPeriod: "ExtensionPeriod",
    WaitPeriod: "WaitPeriod",
};
const AlarmType = {
    CompositeAlarm: "CompositeAlarm",
    MetricAlarm: "MetricAlarm",
};
const HistoryItemType = {
    Action: "Action",
    AlarmContributorAction: "AlarmContributorAction",
    AlarmContributorStateUpdate: "AlarmContributorStateUpdate",
    ConfigurationUpdate: "ConfigurationUpdate",
    StateUpdate: "StateUpdate",
};
const AlarmMuteRuleStatus = {
    ACTIVE: "ACTIVE",
    EXPIRED: "EXPIRED",
    SCHEDULED: "SCHEDULED",
};
const StandardUnit = {
    Bits: "Bits",
    Bits_Second: "Bits/Second",
    Bytes: "Bytes",
    Bytes_Second: "Bytes/Second",
    Count: "Count",
    Count_Second: "Count/Second",
    Gigabits: "Gigabits",
    Gigabits_Second: "Gigabits/Second",
    Gigabytes: "Gigabytes",
    Gigabytes_Second: "Gigabytes/Second",
    Kilobits: "Kilobits",
    Kilobits_Second: "Kilobits/Second",
    Kilobytes: "Kilobytes",
    Kilobytes_Second: "Kilobytes/Second",
    Megabits: "Megabits",
    Megabits_Second: "Megabits/Second",
    Megabytes: "Megabytes",
    Megabytes_Second: "Megabytes/Second",
    Microseconds: "Microseconds",
    Milliseconds: "Milliseconds",
    None: "None",
    Percent: "Percent",
    Seconds: "Seconds",
    Terabits: "Terabits",
    Terabits_Second: "Terabits/Second",
    Terabytes: "Terabytes",
    Terabytes_Second: "Terabytes/Second",
};
const AnomalyDetectorStateValue = {
    PENDING_TRAINING: "PENDING_TRAINING",
    TRAINED: "TRAINED",
    TRAINED_INSUFFICIENT_DATA: "TRAINED_INSUFFICIENT_DATA",
};
const AnomalyDetectorType = {
    METRIC_MATH: "METRIC_MATH",
    SINGLE_METRIC: "SINGLE_METRIC",
};
const ComparisonOperator = {
    GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
    GreaterThanThreshold: "GreaterThanThreshold",
    GreaterThanUpperThreshold: "GreaterThanUpperThreshold",
    LessThanLowerOrGreaterThanUpperThreshold: "LessThanLowerOrGreaterThanUpperThreshold",
    LessThanLowerThreshold: "LessThanLowerThreshold",
    LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
    LessThanThreshold: "LessThanThreshold",
};
const StateValue = {
    ALARM: "ALARM",
    INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
    OK: "OK",
};
const ScanBy = {
    TIMESTAMP_ASCENDING: "TimestampAscending",
    TIMESTAMP_DESCENDING: "TimestampDescending",
};
const EvaluationState = {
    EVALUATION_ERROR: "EVALUATION_ERROR",
    EVALUATION_FAILURE: "EVALUATION_FAILURE",
    PARTIAL_DATA: "PARTIAL_DATA",
};
const Statistic = {
    Average: "Average",
    Maximum: "Maximum",
    Minimum: "Minimum",
    SampleCount: "SampleCount",
    Sum: "Sum",
};
const StatusCode = {
    COMPLETE: "Complete",
    FORBIDDEN: "Forbidden",
    INTERNAL_ERROR: "InternalError",
    PARTIAL_DATA: "PartialData",
};
const MetricStreamOutputFormat = {
    JSON: "json",
    OPEN_TELEMETRY_0_7: "opentelemetry0.7",
    OPEN_TELEMETRY_1_0: "opentelemetry1.0",
};
const RecentlyActive = {
    PT3H: "PT3H",
};

exports.$Command = smithyClient.Command;
exports.__Client = smithyClient.Client;
exports.CloudWatchServiceException = CloudWatchServiceException.CloudWatchServiceException;
exports.ActionsSuppressedBy = ActionsSuppressedBy;
exports.AlarmMuteRuleStatus = AlarmMuteRuleStatus;
exports.AlarmType = AlarmType;
exports.AnomalyDetectorStateValue = AnomalyDetectorStateValue;
exports.AnomalyDetectorType = AnomalyDetectorType;
exports.CloudWatch = CloudWatch;
exports.CloudWatchClient = CloudWatchClient;
exports.ComparisonOperator = ComparisonOperator;
exports.DeleteAlarmMuteRuleCommand = DeleteAlarmMuteRuleCommand;
exports.DeleteAlarmsCommand = DeleteAlarmsCommand;
exports.DeleteAnomalyDetectorCommand = DeleteAnomalyDetectorCommand;
exports.DeleteDashboardsCommand = DeleteDashboardsCommand;
exports.DeleteInsightRulesCommand = DeleteInsightRulesCommand;
exports.DeleteMetricStreamCommand = DeleteMetricStreamCommand;
exports.DescribeAlarmContributorsCommand = DescribeAlarmContributorsCommand;
exports.DescribeAlarmHistoryCommand = DescribeAlarmHistoryCommand;
exports.DescribeAlarmsCommand = DescribeAlarmsCommand;
exports.DescribeAlarmsForMetricCommand = DescribeAlarmsForMetricCommand;
exports.DescribeAnomalyDetectorsCommand = DescribeAnomalyDetectorsCommand;
exports.DescribeInsightRulesCommand = DescribeInsightRulesCommand;
exports.DisableAlarmActionsCommand = DisableAlarmActionsCommand;
exports.DisableInsightRulesCommand = DisableInsightRulesCommand;
exports.EnableAlarmActionsCommand = EnableAlarmActionsCommand;
exports.EnableInsightRulesCommand = EnableInsightRulesCommand;
exports.EvaluationState = EvaluationState;
exports.GetAlarmMuteRuleCommand = GetAlarmMuteRuleCommand;
exports.GetDashboardCommand = GetDashboardCommand;
exports.GetInsightRuleReportCommand = GetInsightRuleReportCommand;
exports.GetMetricDataCommand = GetMetricDataCommand;
exports.GetMetricStatisticsCommand = GetMetricStatisticsCommand;
exports.GetMetricStreamCommand = GetMetricStreamCommand;
exports.GetMetricWidgetImageCommand = GetMetricWidgetImageCommand;
exports.HistoryItemType = HistoryItemType;
exports.ListAlarmMuteRulesCommand = ListAlarmMuteRulesCommand;
exports.ListDashboardsCommand = ListDashboardsCommand;
exports.ListManagedInsightRulesCommand = ListManagedInsightRulesCommand;
exports.ListMetricStreamsCommand = ListMetricStreamsCommand;
exports.ListMetricsCommand = ListMetricsCommand;
exports.ListTagsForResourceCommand = ListTagsForResourceCommand;
exports.MetricStreamOutputFormat = MetricStreamOutputFormat;
exports.PutAlarmMuteRuleCommand = PutAlarmMuteRuleCommand;
exports.PutAnomalyDetectorCommand = PutAnomalyDetectorCommand;
exports.PutCompositeAlarmCommand = PutCompositeAlarmCommand;
exports.PutDashboardCommand = PutDashboardCommand;
exports.PutInsightRuleCommand = PutInsightRuleCommand;
exports.PutManagedInsightRulesCommand = PutManagedInsightRulesCommand;
exports.PutMetricAlarmCommand = PutMetricAlarmCommand;
exports.PutMetricDataCommand = PutMetricDataCommand;
exports.PutMetricStreamCommand = PutMetricStreamCommand;
exports.RecentlyActive = RecentlyActive;
exports.ScanBy = ScanBy;
exports.SetAlarmStateCommand = SetAlarmStateCommand;
exports.StandardUnit = StandardUnit;
exports.StartMetricStreamsCommand = StartMetricStreamsCommand;
exports.StateValue = StateValue;
exports.Statistic = Statistic;
exports.StatusCode = StatusCode;
exports.StopMetricStreamsCommand = StopMetricStreamsCommand;
exports.TagResourceCommand = TagResourceCommand;
exports.UntagResourceCommand = UntagResourceCommand;
exports.paginateDescribeAlarmHistory = paginateDescribeAlarmHistory;
exports.paginateDescribeAlarms = paginateDescribeAlarms;
exports.paginateDescribeAnomalyDetectors = paginateDescribeAnomalyDetectors;
exports.paginateDescribeInsightRules = paginateDescribeInsightRules;
exports.paginateGetMetricData = paginateGetMetricData;
exports.paginateListAlarmMuteRules = paginateListAlarmMuteRules;
exports.paginateListDashboards = paginateListDashboards;
exports.paginateListManagedInsightRules = paginateListManagedInsightRules;
exports.paginateListMetricStreams = paginateListMetricStreams;
exports.paginateListMetrics = paginateListMetrics;
exports.waitForAlarmExists = waitForAlarmExists;
exports.waitForAlarmMuteRuleExists = waitForAlarmMuteRuleExists;
exports.waitForCompositeAlarmExists = waitForCompositeAlarmExists;
exports.waitUntilAlarmExists = waitUntilAlarmExists;
exports.waitUntilAlarmMuteRuleExists = waitUntilAlarmMuteRuleExists;
exports.waitUntilCompositeAlarmExists = waitUntilCompositeAlarmExists;
Object.prototype.hasOwnProperty.call(schemas_0, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: schemas_0['__proto__']
    });

Object.keys(schemas_0).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = schemas_0[k];
});
Object.prototype.hasOwnProperty.call(errors, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: errors['__proto__']
    });

Object.keys(errors).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = errors[k];
});
