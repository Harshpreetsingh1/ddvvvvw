/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageBillableSummaryBody } from "./UsageBillableSummaryBody";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response with aggregated usage types.
 */
export declare class UsageBillableSummaryKeys {
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmFargateAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmFargateSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmProfilerHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmProfilerHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "apmTraceSearchSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "applicationSecurityFargateAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "applicationSecurityHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "applicationSecurityHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ciPipelineIndexedSpansSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ciPipelineMaximum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ciPipelineSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ciTestIndexedSpansSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ciTestingMaximum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ciTestingSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cloudCostManagementAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cloudCostManagementSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cspmContainerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cspmHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cspmHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "customEventSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cwsContainerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cwsHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "cwsHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "dbmHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "dbmHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "dbmNormalizedQueriesAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "dbmNormalizedQueriesSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "fargateContainerApmAndProfilerAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "fargateContainerApmAndProfilerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "fargateContainerAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "fargateContainerProfilerAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "fargateContainerProfilerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "fargateContainerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "incidentManagementMaximum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "incidentManagementSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "infraAndApmHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "infraAndApmHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "infraContainerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "infraHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "infraHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ingestedSpansSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ingestedTimeseriesAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "ingestedTimeseriesSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "iotSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "iotTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "lambdaFunctionAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "lambdaFunctionSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsForwardingSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed15daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed180daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed1daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed30daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed360daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed3daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed45daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed60daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed7daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexed90daySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexedCustomRetentionSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIndexedSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "logsIngestedSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "networkDeviceSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "networkDeviceTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "npmFlowSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "npmHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "npmHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "observabilityPipelineSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "onlineArchiveSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "profContainerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "profHostSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "profHostTop99p"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "rumLiteSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "rumReplaySum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "rumSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "rumUnitsSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "sensitiveDataScannerSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "serverlessApmSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "serverlessInfraAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "serverlessInfraSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "serverlessInvocationSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "siemSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "standardTimeseriesAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "syntheticsApiTestsSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "syntheticsAppTestingMaximum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "syntheticsBrowserChecksSum"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "timeseriesAverage"?: UsageBillableSummaryBody;
    /**
     * Response with properties for each aggregated usage type.
     */
    "timeseriesSum"?: UsageBillableSummaryBody;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
