"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableAlarmActionsInput$ = exports.DimensionFilter$ = exports.Dimension$ = exports.DescribeInsightRulesOutput$ = exports.DescribeInsightRulesInput$ = exports.DescribeAnomalyDetectorsOutput$ = exports.DescribeAnomalyDetectorsInput$ = exports.DescribeAlarmsOutput$ = exports.DescribeAlarmsInput$ = exports.DescribeAlarmsForMetricOutput$ = exports.DescribeAlarmsForMetricInput$ = exports.DescribeAlarmHistoryOutput$ = exports.DescribeAlarmHistoryInput$ = exports.DescribeAlarmContributorsOutput$ = exports.DescribeAlarmContributorsInput$ = exports.DeleteMetricStreamOutput$ = exports.DeleteMetricStreamInput$ = exports.DeleteInsightRulesOutput$ = exports.DeleteInsightRulesInput$ = exports.DeleteDashboardsOutput$ = exports.DeleteDashboardsInput$ = exports.DeleteAnomalyDetectorOutput$ = exports.DeleteAnomalyDetectorInput$ = exports.DeleteAlarmsInput$ = exports.DeleteAlarmMuteRuleInput$ = exports.Datapoint$ = exports.DashboardValidationMessage$ = exports.DashboardEntry$ = exports.CompositeAlarm$ = exports.AnomalyDetectorConfiguration$ = exports.AnomalyDetector$ = exports.AlarmMuteRuleSummary$ = exports.AlarmHistoryItem$ = exports.AlarmContributor$ = exports.errorTypeRegistries = exports.ResourceNotFoundException$ = exports.ResourceNotFound$ = exports.MissingRequiredParameterException$ = exports.LimitExceededFault$ = exports.LimitExceededException$ = exports.InvalidParameterValueException$ = exports.InvalidParameterCombinationException$ = exports.InvalidNextToken$ = exports.InvalidFormatFault$ = exports.InternalServiceFault$ = exports.DashboardNotFoundError$ = exports.DashboardInvalidInputError$ = exports.ConflictException$ = exports.ConcurrentModificationException$ = exports.CloudWatchServiceException$ = void 0;
exports.MetricStat$ = exports.MetricMathAnomalyDetector$ = exports.MetricDatum$ = exports.MetricDataResult$ = exports.MetricDataQuery$ = exports.MetricCharacteristics$ = exports.MetricAlarm$ = exports.Metric$ = exports.MessageData$ = exports.ManagedRuleState$ = exports.ManagedRuleDescription$ = exports.ManagedRule$ = exports.ListTagsForResourceOutput$ = exports.ListTagsForResourceInput$ = exports.ListMetricStreamsOutput$ = exports.ListMetricStreamsInput$ = exports.ListMetricsOutput$ = exports.ListMetricsInput$ = exports.ListManagedInsightRulesOutput$ = exports.ListManagedInsightRulesInput$ = exports.ListDashboardsOutput$ = exports.ListDashboardsInput$ = exports.ListAlarmMuteRulesOutput$ = exports.ListAlarmMuteRulesInput$ = exports.LabelOptions$ = exports.InsightRuleMetricDatapoint$ = exports.InsightRuleContributorDatapoint$ = exports.InsightRuleContributor$ = exports.InsightRule$ = exports.GetMetricWidgetImageOutput$ = exports.GetMetricWidgetImageInput$ = exports.GetMetricStreamOutput$ = exports.GetMetricStreamInput$ = exports.GetMetricStatisticsOutput$ = exports.GetMetricStatisticsInput$ = exports.GetMetricDataOutput$ = exports.GetMetricDataInput$ = exports.GetInsightRuleReportOutput$ = exports.GetInsightRuleReportInput$ = exports.GetDashboardOutput$ = exports.GetDashboardInput$ = exports.GetAlarmMuteRuleOutput$ = exports.GetAlarmMuteRuleInput$ = exports.EntityMetricData$ = exports.Entity$ = exports.EnableInsightRulesOutput$ = exports.EnableInsightRulesInput$ = exports.EnableAlarmActionsInput$ = exports.DisableInsightRulesOutput$ = exports.DisableInsightRulesInput$ = void 0;
exports.EnableAlarmActions$ = exports.DisableInsightRules$ = exports.DisableAlarmActions$ = exports.DescribeInsightRules$ = exports.DescribeAnomalyDetectors$ = exports.DescribeAlarmsForMetric$ = exports.DescribeAlarms$ = exports.DescribeAlarmHistory$ = exports.DescribeAlarmContributors$ = exports.DeleteMetricStream$ = exports.DeleteInsightRules$ = exports.DeleteDashboards$ = exports.DeleteAnomalyDetector$ = exports.DeleteAlarms$ = exports.DeleteAlarmMuteRule$ = exports.UntagResourceOutput$ = exports.UntagResourceInput$ = exports.TagResourceOutput$ = exports.TagResourceInput$ = exports.Tag$ = exports.StopMetricStreamsOutput$ = exports.StopMetricStreamsInput$ = exports.StatisticSet$ = exports.StartMetricStreamsOutput$ = exports.StartMetricStreamsInput$ = exports.SingleMetricAnomalyDetector$ = exports.SetAlarmStateInput$ = exports.Schedule$ = exports.Rule$ = exports.Range$ = exports.PutMetricStreamOutput$ = exports.PutMetricStreamInput$ = exports.PutMetricDataInput$ = exports.PutMetricAlarmInput$ = exports.PutManagedInsightRulesOutput$ = exports.PutManagedInsightRulesInput$ = exports.PutInsightRuleOutput$ = exports.PutInsightRuleInput$ = exports.PutDashboardOutput$ = exports.PutDashboardInput$ = exports.PutCompositeAlarmInput$ = exports.PutAnomalyDetectorOutput$ = exports.PutAnomalyDetectorInput$ = exports.PutAlarmMuteRuleInput$ = exports.PartialFailure$ = exports.MuteTargets$ = exports.MetricStreamStatisticsMetric$ = exports.MetricStreamStatisticsConfiguration$ = exports.MetricStreamFilter$ = exports.MetricStreamEntry$ = void 0;
exports.UntagResource$ = exports.TagResource$ = exports.StopMetricStreams$ = exports.StartMetricStreams$ = exports.SetAlarmState$ = exports.PutMetricStream$ = exports.PutMetricData$ = exports.PutMetricAlarm$ = exports.PutManagedInsightRules$ = exports.PutInsightRule$ = exports.PutDashboard$ = exports.PutCompositeAlarm$ = exports.PutAnomalyDetector$ = exports.PutAlarmMuteRule$ = exports.ListTagsForResource$ = exports.ListMetricStreams$ = exports.ListMetrics$ = exports.ListManagedInsightRules$ = exports.ListDashboards$ = exports.ListAlarmMuteRules$ = exports.GetMetricWidgetImage$ = exports.GetMetricStream$ = exports.GetMetricStatistics$ = exports.GetMetricData$ = exports.GetInsightRuleReport$ = exports.GetDashboard$ = exports.GetAlarmMuteRule$ = exports.EnableInsightRules$ = void 0;
const _A = "Average";
const _AA = "AlarmActions";
const _AAV = "ApproximateAggregateValue";
const _AAl = "AlarmArn";
const _AC = "AlarmContributor";
const _ACA = "AlarmContributorAttributes";
const _ACI = "AlarmContributorId";
const _ACUT = "AlarmConfigurationUpdatedTimestamp";
const _ACl = "AlarmContributors";
const _AD = "AnomalyDetector";
const _ADC = "AnomalyDetectorConfiguration";
const _ADETR = "AnomalyDetectorExcludedTimeRanges";
const _ADT = "AnomalyDetectorTypes";
const _ADl = "AlarmDescription";
const _ADn = "AnomalyDetectors";
const _AE = "ActionsEnabled";
const _AHI = "AlarmHistoryItem";
const _AHIl = "AlarmHistoryItems";
const _AI = "AccountId";
const _AMRA = "AlarmMuteRuleArn";
const _AMRN = "AlarmMuteRuleName";
const _AMRS = "AlarmMuteRuleSummary";
const _AMRSl = "AlarmMuteRuleSummaries";
const _AN = "AlarmName";
const _ANP = "AlarmNamePrefix";
const _ANl = "AlarmNames";
const _AOTL = "ApplyOnTransformedLogs";
const _AP = "ActionPrefix";
const _AR = "AlarmRule";
const _AS = "ActionsSuppressor";
const _ASB = "ActionsSuppressedBy";
const _ASEP = "ActionsSuppressorExtensionPeriod";
const _ASR = "ActionsSuppressedReason";
const _ASWP = "ActionsSuppressorWaitPeriod";
const _ASd = "AdditionalStatistics";
const _ASg = "AggregationStatistic";
const _AT = "AlarmType";
const _ATl = "AlarmTypes";
const _AUC = "ApproximateUniqueCount";
const _AV = "AggregateValue";
const _AVp = "ApproximateValue";
const _Ar = "Arn";
const _At = "Attributes";
const _BF = "BatchFailures";
const _C = "Configuration";
const _CA = "ContributorAttributes";
const _CAo = "CompositeAlarm";
const _CAom = "CompositeAlarms";
const _CD = "CreationDate";
const _CE = "ConflictException";
const _CI = "ContributorId";
const _CME = "ConcurrentModificationException";
const _CO = "ComparisonOperator";
const _COAN = "ChildrenOfAlarmName";
const _Co = "Contributors";
const _Cod = "Code";
const _Cou = "Counts";
const _D = "Dimensions";
const _DA = "DashboardArn";
const _DAA = "DisableAlarmActions";
const _DAAI = "DisableAlarmActionsInput";
const _DAC = "DescribeAlarmContributors";
const _DACI = "DescribeAlarmContributorsInput";
const _DACO = "DescribeAlarmContributorsOutput";
const _DAD = "DeleteAnomalyDetector";
const _DADI = "DeleteAnomalyDetectorInput";
const _DADIe = "DescribeAnomalyDetectorsInput";
const _DADO = "DeleteAnomalyDetectorOutput";
const _DADOe = "DescribeAnomalyDetectorsOutput";
const _DADe = "DescribeAnomalyDetectors";
const _DAFM = "DescribeAlarmsForMetric";
const _DAFMI = "DescribeAlarmsForMetricInput";
const _DAFMO = "DescribeAlarmsForMetricOutput";
const _DAH = "DescribeAlarmHistory";
const _DAHI = "DescribeAlarmHistoryInput";
const _DAHO = "DescribeAlarmHistoryOutput";
const _DAI = "DeleteAlarmsInput";
const _DAIe = "DescribeAlarmsInput";
const _DAMR = "DeleteAlarmMuteRule";
const _DAMRI = "DeleteAlarmMuteRuleInput";
const _DAO = "DescribeAlarmsOutput";
const _DAe = "DeleteAlarms";
const _DAes = "DescribeAlarms";
const _DB = "DashboardBody";
const _DD = "DeleteDashboards";
const _DDI = "DeleteDashboardsInput";
const _DDO = "DeleteDashboardsOutput";
const _DE = "DashboardEntry";
const _DEa = "DashboardEntries";
const _DF = "DimensionFilter";
const _DFi = "DimensionFilters";
const _DIIE = "DashboardInvalidInputError";
const _DIR = "DeleteInsightRules";
const _DIRI = "DeleteInsightRulesInput";
const _DIRIe = "DescribeInsightRulesInput";
const _DIRIi = "DisableInsightRulesInput";
const _DIRO = "DeleteInsightRulesOutput";
const _DIROe = "DescribeInsightRulesOutput";
const _DIROi = "DisableInsightRulesOutput";
const _DIRe = "DescribeInsightRules";
const _DIRi = "DisableInsightRules";
const _DMS = "DeleteMetricStream";
const _DMSI = "DeleteMetricStreamInput";
const _DMSO = "DeleteMetricStreamOutput";
const _DN = "DashboardName";
const _DNFE = "DashboardNotFoundError";
const _DNP = "DashboardNamePrefix";
const _DNa = "DashboardNames";
const _DP = "DataPath";
const _DTA = "DatapointsToAlarm";
const _DVM = "DashboardValidationMessage";
const _DVMa = "DashboardValidationMessages";
const _Da = "Datapoint";
const _Dat = "Datapoints";
const _De = "Description";
const _Def = "Definition";
const _Di = "Dimension";
const _Du = "Duration";
const _E = "Entity";
const _EAA = "EnableAlarmActions";
const _EAAI = "EnableAlarmActionsInput";
const _ED = "ExpireDate";
const _EDn = "EndDate";
const _EF = "ExcludeFilters";
const _EIR = "EnableInsightRules";
const _EIRI = "EnableInsightRulesInput";
const _EIRO = "EnableInsightRulesOutput";
const _ELSCP = "EvaluateLowSampleCountPercentile";
const _EMD = "EntityMetricData";
const _EMDL = "EntityMetricDataList";
const _EP = "EvaluationPeriods";
const _ES = "ExtendedStatistics";
const _ESv = "EvaluationState";
const _ESx = "ExtendedStatistic";
const _ET = "EndTime";
const _ETR = "ExcludedTimeRanges";
const _ETx = "ExceptionType";
const _En = "Entries";
const _Ex = "Expression";
const _F = "Failures";
const _FA = "FirehoseArn";
const _FC = "FailureCode";
const _FD = "FailureDescription";
const _FR = "FailureResource";
const _GAMR = "GetAlarmMuteRule";
const _GAMRI = "GetAlarmMuteRuleInput";
const _GAMRO = "GetAlarmMuteRuleOutput";
const _GD = "GetDashboard";
const _GDI = "GetDashboardInput";
const _GDO = "GetDashboardOutput";
const _GIRR = "GetInsightRuleReport";
const _GIRRI = "GetInsightRuleReportInput";
const _GIRRO = "GetInsightRuleReportOutput";
const _GMD = "GetMetricData";
const _GMDI = "GetMetricDataInput";
const _GMDO = "GetMetricDataOutput";
const _GMS = "GetMetricStatistics";
const _GMSI = "GetMetricStatisticsInput";
const _GMSIe = "GetMetricStreamInput";
const _GMSO = "GetMetricStatisticsOutput";
const _GMSOe = "GetMetricStreamOutput";
const _GMSe = "GetMetricStream";
const _GMWI = "GetMetricWidgetImage";
const _GMWII = "GetMetricWidgetImageInput";
const _GMWIO = "GetMetricWidgetImageOutput";
const _HD = "HistoryData";
const _HIT = "HistoryItemType";
const _HS = "HistorySummary";
const _I = "Id";
const _IDA = "InsufficientDataActions";
const _IF = "IncludeFilters";
const _IFF = "InvalidFormatFault";
const _ILA = "IncludeLinkedAccounts";
const _ILAM = "IncludeLinkedAccountsMetrics";
const _IM = "IncludeMetrics";
const _INT = "InvalidNextToken";
const _IPCE = "InvalidParameterCombinationException";
const _IPVE = "InvalidParameterValueException";
const _IR = "InsightRules";
const _IRC = "InsightRuleContributor";
const _IRCD = "InsightRuleContributorDatapoint";
const _IRCDn = "InsightRuleContributorDatapoints";
const _IRCn = "InsightRuleContributors";
const _IRMD = "InsightRuleMetricDatapoint";
const _IRMDn = "InsightRuleMetricDatapoints";
const _IRn = "InsightRule";
const _ISF = "InternalServiceFault";
const _K = "Keys";
const _KA = "KeyAttributes";
const _KL = "KeyLabels";
const _Ke = "Key";
const _L = "Label";
const _LAMR = "ListAlarmMuteRules";
const _LAMRI = "ListAlarmMuteRulesInput";
const _LAMRO = "ListAlarmMuteRulesOutput";
const _LD = "ListDashboards";
const _LDI = "ListDashboardsInput";
const _LDO = "ListDashboardsOutput";
const _LEE = "LimitExceededException";
const _LEF = "LimitExceededFault";
const _LM = "LastModified";
const _LMI = "ListMetricsInput";
const _LMIR = "ListManagedInsightRules";
const _LMIRI = "ListManagedInsightRulesInput";
const _LMIRO = "ListManagedInsightRulesOutput";
const _LMO = "ListMetricsOutput";
const _LMS = "ListMetricStreams";
const _LMSI = "ListMetricStreamsInput";
const _LMSO = "ListMetricStreamsOutput";
const _LMi = "ListMetrics";
const _LO = "LabelOptions";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _LUD = "LastUpdateDate";
const _LUT = "LastUpdatedTimestamp";
const _M = "Message";
const _MA = "MetricAlarms";
const _MAe = "MetricAlarm";
const _MC = "MetricCharacteristics";
const _MCC = "MaxContributorCount";
const _MCV = "MaxContributorValue";
const _MD = "MetricData";
const _MDQ = "MetricDataQueries";
const _MDQe = "MetricDataQuery";
const _MDR = "MetricDataResults";
const _MDRM = "MetricDataResultMessages";
const _MDRe = "MetricDataResult";
const _MDa = "MaxDatapoints";
const _MDe = "MetricDatapoints";
const _MDes = "MessageData";
const _MDet = "MetricDatum";
const _MMAD = "MetricMathAnomalyDetector";
const _MN = "MetricName";
const _MNe = "MetricNames";
const _MR = "MaxRecords";
const _MRD = "ManagedRuleDescription";
const _MRDa = "ManagedRuleDescriptions";
const _MRPE = "MissingRequiredParameterException";
const _MRS = "ManagedRuleState";
const _MRa = "MaxResults";
const _MRan = "ManagedRule";
const _MRana = "ManagedRules";
const _MS = "MetricStat";
const _MSE = "MetricStreamEntry";
const _MSEe = "MetricStreamEntries";
const _MSF = "MetricStreamFilter";
const _MSFe = "MetricStreamFilters";
const _MSSC = "MetricStreamStatisticsConfiguration";
const _MSSCe = "MetricStreamStatisticsConfigurations";
const _MSSIM = "MetricStreamStatisticsIncludeMetrics";
const _MSSM = "MetricStreamStatisticsMetric";
const _MT = "MuteType";
const _MTe = "MetricTimezone";
const _MTu = "MuteTargets";
const _MW = "MetricWidget";
const _MWI = "MetricWidgetImage";
const _Ma = "Maximum";
const _Me = "Metrics";
const _Mes = "Messages";
const _Met = "Metric";
const _Mi = "Minimum";
const _N = "Namespace";
const _NT = "NextToken";
const _Na = "Name";
const _Nam = "Names";
const _OA = "OwningAccount";
const _OAw = "OwningAccounts";
const _OB = "OrderBy";
const _OF = "OutputFormat";
const _OKA = "OKActions";
const _P = "Period";
const _PAD = "PutAnomalyDetector";
const _PADI = "PutAnomalyDetectorInput";
const _PADO = "PutAnomalyDetectorOutput";
const _PAMR = "PutAlarmMuteRule";
const _PAMRI = "PutAlarmMuteRuleInput";
const _PCA = "PutCompositeAlarm";
const _PCAI = "PutCompositeAlarmInput";
const _PD = "PutDashboard";
const _PDI = "PutDashboardInput";
const _PDO = "PutDashboardOutput";
const _PF = "PartialFailure";
const _PIR = "PutInsightRule";
const _PIRI = "PutInsightRuleInput";
const _PIRO = "PutInsightRuleOutput";
const _PMA = "PutMetricAlarm";
const _PMAI = "PutMetricAlarmInput";
const _PMD = "PutMetricData";
const _PMDI = "PutMetricDataInput";
const _PMIR = "PutManagedInsightRules";
const _PMIRI = "PutManagedInsightRulesInput";
const _PMIRO = "PutManagedInsightRulesOutput";
const _PMS = "PutMetricStream";
const _PMSI = "PutMetricStreamInput";
const _PMSO = "PutMetricStreamOutput";
const _POAN = "ParentsOfAlarmName";
const _PS = "PeriodicSpikes";
const _R = "Rule";
const _RA = "RoleArn";
const _RARN = "ResourceARN";
const _RAe = "RecentlyActive";
const _RD = "ReturnData";
const _RDu = "RuleDefinition";
const _RI = "ResourceId";
const _RN = "RuleNames";
const _RNF = "ResourceNotFound";
const _RNFE = "ResourceNotFoundException";
const _RNu = "RuleName";
const _RS = "RuleState";
const _RT = "ResourceType";
const _Ra = "Range";
const _S = "Status";
const _SAS = "SetAlarmState";
const _SASI = "SetAlarmStateInput";
const _SB = "ScanBy";
const _SC = "SampleCount";
const _SCt = "StatisticsConfigurations";
const _SCta = "StatusCode";
const _SD = "StartDate";
const _SEV = "StrictEntityValidation";
const _SMAD = "SingleMetricAnomalyDetector";
const _SMS = "StartMetricStreams";
const _SMSI = "StartMetricStreamsInput";
const _SMSIt = "StopMetricStreamsInput";
const _SMSO = "StartMetricStreamsOutput";
const _SMSOt = "StopMetricStreamsOutput";
const _SMSt = "StopMetricStreams";
const _SR = "StateReason";
const _SRD = "StateReasonData";
const _SRt = "StorageResolution";
const _SS = "StatisticSet";
const _ST = "StartTime";
const _STT = "StateTransitionedTimestamp";
const _SUT = "StateUpdatedTimestamp";
const _SV = "StateValue";
const _SVt = "StatisticValues";
const _Sc = "Schema";
const _Sch = "Schedule";
const _Si = "Size";
const _St = "Stat";
const _Sta = "Statistic";
const _Stat = "Statistics";
const _State = "State";
const _Statu = "Statuses";
const _Su = "Sum";
const _T = "Timestamp";
const _TK = "TagKeys";
const _TL = "TagList";
const _TMD = "TreatMissingData";
const _TMI = "ThresholdMetricId";
const _TN = "TemplateName";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _Ta = "Tags";
const _Tag = "Tag";
const _Th = "Threshold";
const _Ti = "Timezone";
const _Tim = "Timestamps";
const _U = "Unit";
const _UC = "UniqueContributors";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _V = "Value";
const _Va = "Values";
const _aQE = "awsQueryError";
const _c = "client";
const _dVM = "dashboardValidationMessages";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.cloudwatch";
const _se = "server";
const n0 = "com.amazonaws.cloudwatch";
const schema_1 = require("@smithy/core/schema");
const CloudWatchServiceException_1 = require("../models/CloudWatchServiceException");
const errors_1 = require("../models/errors");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.CloudWatchServiceException$ = [-3, _s, "CloudWatchServiceException", 0, [], []];
_s_registry.registerError(exports.CloudWatchServiceException$, CloudWatchServiceException_1.CloudWatchServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.ConcurrentModificationException$ = [-3, n0, _CME,
    { [_aQE]: [`ConcurrentModificationException`, 429], [_e]: _c, [_hE]: 429 },
    [_M],
    [0]
];
n0_registry.registerError(exports.ConcurrentModificationException$, errors_1.ConcurrentModificationException);
exports.ConflictException$ = [-3, n0, _CE,
    { [_e]: _c, [_hE]: 409 },
    [_M],
    [0]
];
n0_registry.registerError(exports.ConflictException$, errors_1.ConflictException);
exports.DashboardInvalidInputError$ = [-3, n0, _DIIE,
    { [_aQE]: [`InvalidParameterInput`, 400], [_e]: _c, [_hE]: 400 },
    [_m, _dVM],
    [0, () => DashboardValidationMessages]
];
n0_registry.registerError(exports.DashboardInvalidInputError$, errors_1.DashboardInvalidInputError);
exports.DashboardNotFoundError$ = [-3, n0, _DNFE,
    { [_aQE]: [`ResourceNotFound`, 404], [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
];
n0_registry.registerError(exports.DashboardNotFoundError$, errors_1.DashboardNotFoundError);
exports.InternalServiceFault$ = [-3, n0, _ISF,
    { [_aQE]: [`InternalServiceError`, 500], [_e]: _se, [_hE]: 500 },
    [_M],
    [0]
];
n0_registry.registerError(exports.InternalServiceFault$, errors_1.InternalServiceFault);
exports.InvalidFormatFault$ = [-3, n0, _IFF,
    { [_aQE]: [`InvalidFormat`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidFormatFault$, errors_1.InvalidFormatFault);
exports.InvalidNextToken$ = [-3, n0, _INT,
    { [_aQE]: [`InvalidNextToken`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidNextToken$, errors_1.InvalidNextToken);
exports.InvalidParameterCombinationException$ = [-3, n0, _IPCE,
    { [_aQE]: [`InvalidParameterCombination`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidParameterCombinationException$, errors_1.InvalidParameterCombinationException);
exports.InvalidParameterValueException$ = [-3, n0, _IPVE,
    { [_aQE]: [`InvalidParameterValue`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.InvalidParameterValueException$, errors_1.InvalidParameterValueException);
exports.LimitExceededException$ = [-3, n0, _LEE,
    { [_aQE]: [`LimitExceededException`, 400], [_e]: _c, [_hE]: 400 },
    [_M],
    [0]
];
n0_registry.registerError(exports.LimitExceededException$, errors_1.LimitExceededException);
exports.LimitExceededFault$ = [-3, n0, _LEF,
    { [_aQE]: [`LimitExceeded`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.LimitExceededFault$, errors_1.LimitExceededFault);
exports.MissingRequiredParameterException$ = [-3, n0, _MRPE,
    { [_aQE]: [`MissingParameter`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
];
n0_registry.registerError(exports.MissingRequiredParameterException$, errors_1.MissingRequiredParameterException);
exports.ResourceNotFound$ = [-3, n0, _RNF,
    { [_aQE]: [`ResourceNotFound`, 404], [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
];
n0_registry.registerError(exports.ResourceNotFound$, errors_1.ResourceNotFound);
exports.ResourceNotFoundException$ = [-3, n0, _RNFE,
    { [_aQE]: [`ResourceNotFoundException`, 404], [_e]: _c, [_hE]: 404 },
    [_RT, _RI, _M],
    [0, 0, 0]
];
n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
exports.AlarmContributor$ = [3, n0, _AC,
    0,
    [_CI, _CA, _SR, _STT],
    [0, 128 | 0, 0, 4], 3
];
exports.AlarmHistoryItem$ = [3, n0, _AHI,
    0,
    [_AN, _ACI, _AT, _T, _HIT, _HS, _HD, _ACA],
    [0, 0, 0, 4, 0, 0, 0, 128 | 0]
];
exports.AlarmMuteRuleSummary$ = [3, n0, _AMRS,
    0,
    [_AMRA, _ED, _S, _MT, _LUT],
    [0, 4, 0, 0, 4]
];
exports.AnomalyDetector$ = [3, n0, _AD,
    0,
    [_N, _MN, _D, _St, _C, _SV, _MC, _SMAD, _MMAD],
    [0, 0, () => Dimensions, 0, () => exports.AnomalyDetectorConfiguration$, 0, () => exports.MetricCharacteristics$, () => exports.SingleMetricAnomalyDetector$, () => exports.MetricMathAnomalyDetector$]
];
exports.AnomalyDetectorConfiguration$ = [3, n0, _ADC,
    0,
    [_ETR, _MTe],
    [() => AnomalyDetectorExcludedTimeRanges, 0]
];
exports.CompositeAlarm$ = [3, n0, _CAo,
    0,
    [_AE, _AA, _AAl, _ACUT, _ADl, _AN, _AR, _IDA, _OKA, _SR, _SRD, _SUT, _SV, _STT, _ASB, _ASR, _AS, _ASWP, _ASEP],
    [2, 64 | 0, 0, 4, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, 4, 0, 4, 0, 0, 0, 1, 1]
];
exports.DashboardEntry$ = [3, n0, _DE,
    0,
    [_DN, _DA, _LM, _Si],
    [0, 0, 4, 1]
];
exports.DashboardValidationMessage$ = [3, n0, _DVM,
    0,
    [_DP, _M],
    [0, 0]
];
exports.Datapoint$ = [3, n0, _Da,
    0,
    [_T, _SC, _A, _Su, _Mi, _Ma, _U, _ES],
    [4, 1, 1, 1, 1, 1, 0, 128 | 1]
];
exports.DeleteAlarmMuteRuleInput$ = [3, n0, _DAMRI,
    0,
    [_AMRN],
    [0], 1
];
exports.DeleteAlarmsInput$ = [3, n0, _DAI,
    0,
    [_ANl],
    [64 | 0], 1
];
exports.DeleteAnomalyDetectorInput$ = [3, n0, _DADI,
    0,
    [_N, _MN, _D, _St, _SMAD, _MMAD],
    [0, 0, () => Dimensions, 0, () => exports.SingleMetricAnomalyDetector$, () => exports.MetricMathAnomalyDetector$]
];
exports.DeleteAnomalyDetectorOutput$ = [3, n0, _DADO,
    0,
    [],
    []
];
exports.DeleteDashboardsInput$ = [3, n0, _DDI,
    0,
    [_DNa],
    [64 | 0], 1
];
exports.DeleteDashboardsOutput$ = [3, n0, _DDO,
    0,
    [],
    []
];
exports.DeleteInsightRulesInput$ = [3, n0, _DIRI,
    0,
    [_RN],
    [64 | 0], 1
];
exports.DeleteInsightRulesOutput$ = [3, n0, _DIRO,
    0,
    [_F],
    [() => BatchFailures]
];
exports.DeleteMetricStreamInput$ = [3, n0, _DMSI,
    0,
    [_Na],
    [0], 1
];
exports.DeleteMetricStreamOutput$ = [3, n0, _DMSO,
    0,
    [],
    []
];
exports.DescribeAlarmContributorsInput$ = [3, n0, _DACI,
    0,
    [_AN, _NT],
    [0, 0], 1
];
exports.DescribeAlarmContributorsOutput$ = [3, n0, _DACO,
    0,
    [_ACl, _NT],
    [() => AlarmContributors, 0], 1
];
exports.DescribeAlarmHistoryInput$ = [3, n0, _DAHI,
    0,
    [_AN, _ACI, _ATl, _HIT, _SD, _EDn, _MR, _NT, _SB],
    [0, 0, 64 | 0, 0, 4, 4, 1, 0, 0]
];
exports.DescribeAlarmHistoryOutput$ = [3, n0, _DAHO,
    0,
    [_AHIl, _NT],
    [() => AlarmHistoryItems, 0]
];
exports.DescribeAlarmsForMetricInput$ = [3, n0, _DAFMI,
    0,
    [_MN, _N, _Sta, _ESx, _D, _P, _U],
    [0, 0, 0, 0, () => Dimensions, 1, 0], 2
];
exports.DescribeAlarmsForMetricOutput$ = [3, n0, _DAFMO,
    0,
    [_MA],
    [() => MetricAlarms]
];
exports.DescribeAlarmsInput$ = [3, n0, _DAIe,
    0,
    [_ANl, _ANP, _ATl, _COAN, _POAN, _SV, _AP, _MR, _NT],
    [64 | 0, 0, 64 | 0, 0, 0, 0, 0, 1, 0]
];
exports.DescribeAlarmsOutput$ = [3, n0, _DAO,
    0,
    [_CAom, _MA, _NT],
    [() => CompositeAlarms, () => MetricAlarms, 0]
];
exports.DescribeAnomalyDetectorsInput$ = [3, n0, _DADIe,
    0,
    [_NT, _MRa, _N, _MN, _D, _ADT],
    [0, 1, 0, 0, () => Dimensions, 64 | 0]
];
exports.DescribeAnomalyDetectorsOutput$ = [3, n0, _DADOe,
    0,
    [_ADn, _NT],
    [() => AnomalyDetectors, 0]
];
exports.DescribeInsightRulesInput$ = [3, n0, _DIRIe,
    0,
    [_NT, _MRa],
    [0, 1]
];
exports.DescribeInsightRulesOutput$ = [3, n0, _DIROe,
    0,
    [_NT, _IR],
    [0, () => InsightRules]
];
exports.Dimension$ = [3, n0, _Di,
    0,
    [_Na, _V],
    [0, 0], 2
];
exports.DimensionFilter$ = [3, n0, _DF,
    0,
    [_Na, _V],
    [0, 0], 1
];
exports.DisableAlarmActionsInput$ = [3, n0, _DAAI,
    0,
    [_ANl],
    [64 | 0], 1
];
exports.DisableInsightRulesInput$ = [3, n0, _DIRIi,
    0,
    [_RN],
    [64 | 0], 1
];
exports.DisableInsightRulesOutput$ = [3, n0, _DIROi,
    0,
    [_F],
    [() => BatchFailures]
];
exports.EnableAlarmActionsInput$ = [3, n0, _EAAI,
    0,
    [_ANl],
    [64 | 0], 1
];
exports.EnableInsightRulesInput$ = [3, n0, _EIRI,
    0,
    [_RN],
    [64 | 0], 1
];
exports.EnableInsightRulesOutput$ = [3, n0, _EIRO,
    0,
    [_F],
    [() => BatchFailures]
];
exports.Entity$ = [3, n0, _E,
    0,
    [_KA, _At],
    [128 | 0, 128 | 0]
];
exports.EntityMetricData$ = [3, n0, _EMD,
    0,
    [_E, _MD],
    [() => exports.Entity$, () => MetricData]
];
exports.GetAlarmMuteRuleInput$ = [3, n0, _GAMRI,
    0,
    [_AMRN],
    [0], 1
];
exports.GetAlarmMuteRuleOutput$ = [3, n0, _GAMRO,
    0,
    [_Na, _AMRA, _De, _R, _MTu, _SD, _ED, _S, _LUT, _MT],
    [0, 0, 0, () => exports.Rule$, () => exports.MuteTargets$, 4, 4, 0, 4, 0]
];
exports.GetDashboardInput$ = [3, n0, _GDI,
    0,
    [_DN],
    [0], 1
];
exports.GetDashboardOutput$ = [3, n0, _GDO,
    0,
    [_DA, _DB, _DN],
    [0, 0, 0]
];
exports.GetInsightRuleReportInput$ = [3, n0, _GIRRI,
    0,
    [_RNu, _ST, _ET, _P, _MCC, _Me, _OB],
    [0, 4, 4, 1, 1, 64 | 0, 0], 4
];
exports.GetInsightRuleReportOutput$ = [3, n0, _GIRRO,
    0,
    [_KL, _ASg, _AV, _AUC, _Co, _MDe],
    [64 | 0, 0, 1, 1, () => InsightRuleContributors, () => InsightRuleMetricDatapoints]
];
exports.GetMetricDataInput$ = [3, n0, _GMDI,
    0,
    [_MDQ, _ST, _ET, _NT, _SB, _MDa, _LO],
    [() => MetricDataQueries, 4, 4, 0, 0, 1, () => exports.LabelOptions$], 3
];
exports.GetMetricDataOutput$ = [3, n0, _GMDO,
    0,
    [_MDR, _NT, _Mes],
    [() => MetricDataResults, 0, () => MetricDataResultMessages]
];
exports.GetMetricStatisticsInput$ = [3, n0, _GMSI,
    0,
    [_N, _MN, _ST, _ET, _P, _D, _Stat, _ES, _U],
    [0, 0, 4, 4, 1, () => Dimensions, 64 | 0, 64 | 0, 0], 5
];
exports.GetMetricStatisticsOutput$ = [3, n0, _GMSO,
    0,
    [_L, _Dat],
    [0, () => Datapoints]
];
exports.GetMetricStreamInput$ = [3, n0, _GMSIe,
    0,
    [_Na],
    [0], 1
];
exports.GetMetricStreamOutput$ = [3, n0, _GMSOe,
    0,
    [_Ar, _Na, _IF, _EF, _FA, _RA, _State, _CD, _LUD, _OF, _SCt, _ILAM],
    [0, 0, () => MetricStreamFilters, () => MetricStreamFilters, 0, 0, 0, 4, 4, 0, () => MetricStreamStatisticsConfigurations, 2]
];
exports.GetMetricWidgetImageInput$ = [3, n0, _GMWII,
    0,
    [_MW, _OF],
    [0, 0], 1
];
exports.GetMetricWidgetImageOutput$ = [3, n0, _GMWIO,
    0,
    [_MWI],
    [21]
];
exports.InsightRule$ = [3, n0, _IRn,
    0,
    [_Na, _State, _Sc, _Def, _MRan, _AOTL],
    [0, 0, 0, 0, 2, 2], 4
];
exports.InsightRuleContributor$ = [3, n0, _IRC,
    0,
    [_K, _AAV, _Dat],
    [64 | 0, 1, () => InsightRuleContributorDatapoints], 3
];
exports.InsightRuleContributorDatapoint$ = [3, n0, _IRCD,
    0,
    [_T, _AVp],
    [4, 1], 2
];
exports.InsightRuleMetricDatapoint$ = [3, n0, _IRMD,
    0,
    [_T, _UC, _MCV, _SC, _A, _Su, _Mi, _Ma],
    [4, 1, 1, 1, 1, 1, 1, 1], 1
];
exports.LabelOptions$ = [3, n0, _LO,
    0,
    [_Ti],
    [0]
];
exports.ListAlarmMuteRulesInput$ = [3, n0, _LAMRI,
    0,
    [_AN, _Statu, _MR, _NT],
    [0, 64 | 0, 1, 0]
];
exports.ListAlarmMuteRulesOutput$ = [3, n0, _LAMRO,
    0,
    [_AMRSl, _NT],
    [() => AlarmMuteRuleSummaries, 0]
];
exports.ListDashboardsInput$ = [3, n0, _LDI,
    0,
    [_DNP, _NT],
    [0, 0]
];
exports.ListDashboardsOutput$ = [3, n0, _LDO,
    0,
    [_DEa, _NT],
    [() => DashboardEntries, 0]
];
exports.ListManagedInsightRulesInput$ = [3, n0, _LMIRI,
    0,
    [_RARN, _NT, _MRa],
    [0, 0, 1], 1
];
exports.ListManagedInsightRulesOutput$ = [3, n0, _LMIRO,
    0,
    [_MRana, _NT],
    [() => ManagedRuleDescriptions, 0]
];
exports.ListMetricsInput$ = [3, n0, _LMI,
    0,
    [_N, _MN, _D, _NT, _RAe, _ILA, _OA],
    [0, 0, () => DimensionFilters, 0, 0, 2, 0]
];
exports.ListMetricsOutput$ = [3, n0, _LMO,
    0,
    [_Me, _NT, _OAw],
    [() => Metrics, 0, 64 | 0]
];
exports.ListMetricStreamsInput$ = [3, n0, _LMSI,
    0,
    [_NT, _MRa],
    [0, 1]
];
exports.ListMetricStreamsOutput$ = [3, n0, _LMSO,
    0,
    [_NT, _En],
    [0, () => MetricStreamEntries]
];
exports.ListTagsForResourceInput$ = [3, n0, _LTFRI,
    0,
    [_RARN],
    [0], 1
];
exports.ListTagsForResourceOutput$ = [3, n0, _LTFRO,
    0,
    [_Ta],
    [() => TagList]
];
exports.ManagedRule$ = [3, n0, _MRan,
    0,
    [_TN, _RARN, _Ta],
    [0, 0, () => TagList], 2
];
exports.ManagedRuleDescription$ = [3, n0, _MRD,
    0,
    [_TN, _RARN, _RS],
    [0, 0, () => exports.ManagedRuleState$]
];
exports.ManagedRuleState$ = [3, n0, _MRS,
    0,
    [_RNu, _State],
    [0, 0], 2
];
exports.MessageData$ = [3, n0, _MDes,
    0,
    [_Cod, _V],
    [0, 0]
];
exports.Metric$ = [3, n0, _Met,
    0,
    [_N, _MN, _D],
    [0, 0, () => Dimensions]
];
exports.MetricAlarm$ = [3, n0, _MAe,
    0,
    [_AN, _AAl, _ADl, _ACUT, _AE, _OKA, _AA, _IDA, _SV, _SR, _SRD, _SUT, _MN, _N, _Sta, _ESx, _D, _P, _U, _EP, _DTA, _Th, _CO, _TMD, _ELSCP, _Me, _TMI, _ESv, _STT],
    [0, 0, 0, 4, 2, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, 4, 0, 0, 0, 0, () => Dimensions, 1, 0, 1, 1, 1, 0, 0, 0, () => MetricDataQueries, 0, 0, 4]
];
exports.MetricCharacteristics$ = [3, n0, _MC,
    0,
    [_PS],
    [2]
];
exports.MetricDataQuery$ = [3, n0, _MDQe,
    0,
    [_I, _MS, _Ex, _L, _RD, _P, _AI],
    [0, () => exports.MetricStat$, 0, 0, 2, 1, 0], 1
];
exports.MetricDataResult$ = [3, n0, _MDRe,
    0,
    [_I, _L, _Tim, _Va, _SCta, _Mes],
    [0, 0, 64 | 4, 64 | 1, 0, () => MetricDataResultMessages]
];
exports.MetricDatum$ = [3, n0, _MDet,
    0,
    [_MN, _D, _T, _V, _SVt, _Va, _Cou, _U, _SRt],
    [0, () => Dimensions, 4, 1, () => exports.StatisticSet$, 64 | 1, 64 | 1, 0, 1], 1
];
exports.MetricMathAnomalyDetector$ = [3, n0, _MMAD,
    0,
    [_MDQ],
    [() => MetricDataQueries]
];
exports.MetricStat$ = [3, n0, _MS,
    0,
    [_Met, _P, _St, _U],
    [() => exports.Metric$, 1, 0, 0], 3
];
exports.MetricStreamEntry$ = [3, n0, _MSE,
    0,
    [_Ar, _CD, _LUD, _Na, _FA, _State, _OF],
    [0, 4, 4, 0, 0, 0, 0]
];
exports.MetricStreamFilter$ = [3, n0, _MSF,
    0,
    [_N, _MNe],
    [0, 64 | 0]
];
exports.MetricStreamStatisticsConfiguration$ = [3, n0, _MSSC,
    0,
    [_IM, _ASd],
    [() => MetricStreamStatisticsIncludeMetrics, 64 | 0], 2
];
exports.MetricStreamStatisticsMetric$ = [3, n0, _MSSM,
    0,
    [_N, _MN],
    [0, 0], 2
];
exports.MuteTargets$ = [3, n0, _MTu,
    0,
    [_ANl],
    [64 | 0], 1
];
exports.PartialFailure$ = [3, n0, _PF,
    0,
    [_FR, _ETx, _FC, _FD],
    [0, 0, 0, 0]
];
exports.PutAlarmMuteRuleInput$ = [3, n0, _PAMRI,
    0,
    [_Na, _R, _De, _MTu, _Ta, _SD, _ED],
    [0, () => exports.Rule$, 0, () => exports.MuteTargets$, () => TagList, 4, 4], 2
];
exports.PutAnomalyDetectorInput$ = [3, n0, _PADI,
    0,
    [_N, _MN, _D, _St, _C, _MC, _SMAD, _MMAD],
    [0, 0, () => Dimensions, 0, () => exports.AnomalyDetectorConfiguration$, () => exports.MetricCharacteristics$, () => exports.SingleMetricAnomalyDetector$, () => exports.MetricMathAnomalyDetector$]
];
exports.PutAnomalyDetectorOutput$ = [3, n0, _PADO,
    0,
    [],
    []
];
exports.PutCompositeAlarmInput$ = [3, n0, _PCAI,
    0,
    [_AN, _AR, _AE, _AA, _ADl, _IDA, _OKA, _Ta, _AS, _ASWP, _ASEP],
    [0, 0, 2, 64 | 0, 0, 64 | 0, 64 | 0, () => TagList, 0, 1, 1], 2
];
exports.PutDashboardInput$ = [3, n0, _PDI,
    0,
    [_DN, _DB],
    [0, 0], 2
];
exports.PutDashboardOutput$ = [3, n0, _PDO,
    0,
    [_DVMa],
    [() => DashboardValidationMessages]
];
exports.PutInsightRuleInput$ = [3, n0, _PIRI,
    0,
    [_RNu, _RDu, _RS, _Ta, _AOTL],
    [0, 0, 0, () => TagList, 2], 2
];
exports.PutInsightRuleOutput$ = [3, n0, _PIRO,
    0,
    [],
    []
];
exports.PutManagedInsightRulesInput$ = [3, n0, _PMIRI,
    0,
    [_MRana],
    [() => ManagedRules], 1
];
exports.PutManagedInsightRulesOutput$ = [3, n0, _PMIRO,
    0,
    [_F],
    [() => BatchFailures]
];
exports.PutMetricAlarmInput$ = [3, n0, _PMAI,
    0,
    [_AN, _EP, _CO, _ADl, _AE, _OKA, _AA, _IDA, _MN, _N, _Sta, _ESx, _D, _P, _U, _DTA, _Th, _TMD, _ELSCP, _Me, _Ta, _TMI],
    [0, 1, 0, 0, 2, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, 0, () => Dimensions, 1, 0, 1, 1, 0, 0, () => MetricDataQueries, () => TagList, 0], 3
];
exports.PutMetricDataInput$ = [3, n0, _PMDI,
    0,
    [_N, _MD, _EMD, _SEV],
    [0, () => MetricData, () => EntityMetricDataList, 2], 1
];
exports.PutMetricStreamInput$ = [3, n0, _PMSI,
    0,
    [_Na, _FA, _RA, _OF, _IF, _EF, _Ta, _SCt, _ILAM],
    [0, 0, 0, 0, () => MetricStreamFilters, () => MetricStreamFilters, () => TagList, () => MetricStreamStatisticsConfigurations, 2], 4
];
exports.PutMetricStreamOutput$ = [3, n0, _PMSO,
    0,
    [_Ar],
    [0]
];
exports.Range$ = [3, n0, _Ra,
    0,
    [_ST, _ET],
    [4, 4], 2
];
exports.Rule$ = [3, n0, _R,
    0,
    [_Sch],
    [() => exports.Schedule$], 1
];
exports.Schedule$ = [3, n0, _Sch,
    0,
    [_Ex, _Du, _Ti],
    [0, 0, 0], 2
];
exports.SetAlarmStateInput$ = [3, n0, _SASI,
    0,
    [_AN, _SV, _SR, _SRD],
    [0, 0, 0, 0], 3
];
exports.SingleMetricAnomalyDetector$ = [3, n0, _SMAD,
    0,
    [_AI, _N, _MN, _D, _St],
    [0, 0, 0, () => Dimensions, 0]
];
exports.StartMetricStreamsInput$ = [3, n0, _SMSI,
    0,
    [_Nam],
    [64 | 0], 1
];
exports.StartMetricStreamsOutput$ = [3, n0, _SMSO,
    0,
    [],
    []
];
exports.StatisticSet$ = [3, n0, _SS,
    0,
    [_SC, _Su, _Mi, _Ma],
    [1, 1, 1, 1], 4
];
exports.StopMetricStreamsInput$ = [3, n0, _SMSIt,
    0,
    [_Nam],
    [64 | 0], 1
];
exports.StopMetricStreamsOutput$ = [3, n0, _SMSOt,
    0,
    [],
    []
];
exports.Tag$ = [3, n0, _Tag,
    0,
    [_Ke, _V],
    [0, 0], 2
];
exports.TagResourceInput$ = [3, n0, _TRI,
    0,
    [_RARN, _Ta],
    [0, () => TagList], 2
];
exports.TagResourceOutput$ = [3, n0, _TRO,
    0,
    [],
    []
];
exports.UntagResourceInput$ = [3, n0, _URI,
    0,
    [_RARN, _TK],
    [0, 64 | 0], 2
];
exports.UntagResourceOutput$ = [3, n0, _URO,
    0,
    [],
    []
];
var __Unit = "unit";
var AlarmContributors = [1, n0, _ACl,
    0, () => exports.AlarmContributor$
];
var AlarmHistoryItems = [1, n0, _AHIl,
    0, () => exports.AlarmHistoryItem$
];
var AlarmMuteRuleStatuses = 64 | 0;
var AlarmMuteRuleSummaries = [1, n0, _AMRSl,
    0, () => exports.AlarmMuteRuleSummary$
];
var AlarmNames = 64 | 0;
var AlarmTypes = 64 | 0;
var AnomalyDetectorExcludedTimeRanges = [1, n0, _ADETR,
    0, () => exports.Range$
];
var AnomalyDetectors = [1, n0, _ADn,
    0, () => exports.AnomalyDetector$
];
var AnomalyDetectorTypes = 64 | 0;
var BatchFailures = [1, n0, _BF,
    0, () => exports.PartialFailure$
];
var CompositeAlarms = [1, n0, _CAom,
    0, () => exports.CompositeAlarm$
];
var Counts = 64 | 1;
var DashboardEntries = [1, n0, _DEa,
    0, () => exports.DashboardEntry$
];
var DashboardNames = 64 | 0;
var DashboardValidationMessages = [1, n0, _DVMa,
    0, () => exports.DashboardValidationMessage$
];
var Datapoints = [1, n0, _Dat,
    0, () => exports.Datapoint$
];
var DatapointValues = 64 | 1;
var DimensionFilters = [1, n0, _DFi,
    0, () => exports.DimensionFilter$
];
var Dimensions = [1, n0, _D,
    0, () => exports.Dimension$
];
var EntityMetricDataList = [1, n0, _EMDL,
    0, () => exports.EntityMetricData$
];
var ExtendedStatistics = 64 | 0;
var InsightRuleContributorDatapoints = [1, n0, _IRCDn,
    0, () => exports.InsightRuleContributorDatapoint$
];
var InsightRuleContributorKeyLabels = 64 | 0;
var InsightRuleContributorKeys = 64 | 0;
var InsightRuleContributors = [1, n0, _IRCn,
    0, () => exports.InsightRuleContributor$
];
var InsightRuleMetricDatapoints = [1, n0, _IRMDn,
    0, () => exports.InsightRuleMetricDatapoint$
];
var InsightRuleMetricList = 64 | 0;
var InsightRuleNames = 64 | 0;
var InsightRules = [1, n0, _IR,
    0, () => exports.InsightRule$
];
var ManagedRuleDescriptions = [1, n0, _MRDa,
    0, () => exports.ManagedRuleDescription$
];
var ManagedRules = [1, n0, _MRana,
    0, () => exports.ManagedRule$
];
var MetricAlarms = [1, n0, _MA,
    0, () => exports.MetricAlarm$
];
var MetricData = [1, n0, _MD,
    0, () => exports.MetricDatum$
];
var MetricDataQueries = [1, n0, _MDQ,
    0, () => exports.MetricDataQuery$
];
var MetricDataResultMessages = [1, n0, _MDRM,
    0, () => exports.MessageData$
];
var MetricDataResults = [1, n0, _MDR,
    0, () => exports.MetricDataResult$
];
var Metrics = [1, n0, _Me,
    0, () => exports.Metric$
];
var MetricStreamEntries = [1, n0, _MSEe,
    0, () => exports.MetricStreamEntry$
];
var MetricStreamFilterMetricNames = 64 | 0;
var MetricStreamFilters = [1, n0, _MSFe,
    0, () => exports.MetricStreamFilter$
];
var MetricStreamNames = 64 | 0;
var MetricStreamStatisticsAdditionalStatistics = 64 | 0;
var MetricStreamStatisticsConfigurations = [1, n0, _MSSCe,
    0, () => exports.MetricStreamStatisticsConfiguration$
];
var MetricStreamStatisticsIncludeMetrics = [1, n0, _MSSIM,
    0, () => exports.MetricStreamStatisticsMetric$
];
var MuteTargetAlarmNameList = 64 | 0;
var OwningAccounts = 64 | 0;
var ResourceList = 64 | 0;
var Statistics = 64 | 0;
var TagKeyList = 64 | 0;
var TagList = [1, n0, _TL,
    0, () => exports.Tag$
];
var Timestamps = 64 | 4;
var Values = 64 | 1;
var ContributorAttributes = 128 | 0;
var DatapointValueMap = 128 | 1;
var EntityAttributesMap = 128 | 0;
var EntityKeyAttributesMap = 128 | 0;
exports.DeleteAlarmMuteRule$ = [9, n0, _DAMR,
    0, () => exports.DeleteAlarmMuteRuleInput$, () => __Unit
];
exports.DeleteAlarms$ = [9, n0, _DAe,
    0, () => exports.DeleteAlarmsInput$, () => __Unit
];
exports.DeleteAnomalyDetector$ = [9, n0, _DAD,
    0, () => exports.DeleteAnomalyDetectorInput$, () => exports.DeleteAnomalyDetectorOutput$
];
exports.DeleteDashboards$ = [9, n0, _DD,
    0, () => exports.DeleteDashboardsInput$, () => exports.DeleteDashboardsOutput$
];
exports.DeleteInsightRules$ = [9, n0, _DIR,
    0, () => exports.DeleteInsightRulesInput$, () => exports.DeleteInsightRulesOutput$
];
exports.DeleteMetricStream$ = [9, n0, _DMS,
    0, () => exports.DeleteMetricStreamInput$, () => exports.DeleteMetricStreamOutput$
];
exports.DescribeAlarmContributors$ = [9, n0, _DAC,
    0, () => exports.DescribeAlarmContributorsInput$, () => exports.DescribeAlarmContributorsOutput$
];
exports.DescribeAlarmHistory$ = [9, n0, _DAH,
    0, () => exports.DescribeAlarmHistoryInput$, () => exports.DescribeAlarmHistoryOutput$
];
exports.DescribeAlarms$ = [9, n0, _DAes,
    0, () => exports.DescribeAlarmsInput$, () => exports.DescribeAlarmsOutput$
];
exports.DescribeAlarmsForMetric$ = [9, n0, _DAFM,
    0, () => exports.DescribeAlarmsForMetricInput$, () => exports.DescribeAlarmsForMetricOutput$
];
exports.DescribeAnomalyDetectors$ = [9, n0, _DADe,
    0, () => exports.DescribeAnomalyDetectorsInput$, () => exports.DescribeAnomalyDetectorsOutput$
];
exports.DescribeInsightRules$ = [9, n0, _DIRe,
    0, () => exports.DescribeInsightRulesInput$, () => exports.DescribeInsightRulesOutput$
];
exports.DisableAlarmActions$ = [9, n0, _DAA,
    0, () => exports.DisableAlarmActionsInput$, () => __Unit
];
exports.DisableInsightRules$ = [9, n0, _DIRi,
    0, () => exports.DisableInsightRulesInput$, () => exports.DisableInsightRulesOutput$
];
exports.EnableAlarmActions$ = [9, n0, _EAA,
    0, () => exports.EnableAlarmActionsInput$, () => __Unit
];
exports.EnableInsightRules$ = [9, n0, _EIR,
    0, () => exports.EnableInsightRulesInput$, () => exports.EnableInsightRulesOutput$
];
exports.GetAlarmMuteRule$ = [9, n0, _GAMR,
    0, () => exports.GetAlarmMuteRuleInput$, () => exports.GetAlarmMuteRuleOutput$
];
exports.GetDashboard$ = [9, n0, _GD,
    0, () => exports.GetDashboardInput$, () => exports.GetDashboardOutput$
];
exports.GetInsightRuleReport$ = [9, n0, _GIRR,
    0, () => exports.GetInsightRuleReportInput$, () => exports.GetInsightRuleReportOutput$
];
exports.GetMetricData$ = [9, n0, _GMD,
    0, () => exports.GetMetricDataInput$, () => exports.GetMetricDataOutput$
];
exports.GetMetricStatistics$ = [9, n0, _GMS,
    0, () => exports.GetMetricStatisticsInput$, () => exports.GetMetricStatisticsOutput$
];
exports.GetMetricStream$ = [9, n0, _GMSe,
    0, () => exports.GetMetricStreamInput$, () => exports.GetMetricStreamOutput$
];
exports.GetMetricWidgetImage$ = [9, n0, _GMWI,
    0, () => exports.GetMetricWidgetImageInput$, () => exports.GetMetricWidgetImageOutput$
];
exports.ListAlarmMuteRules$ = [9, n0, _LAMR,
    0, () => exports.ListAlarmMuteRulesInput$, () => exports.ListAlarmMuteRulesOutput$
];
exports.ListDashboards$ = [9, n0, _LD,
    0, () => exports.ListDashboardsInput$, () => exports.ListDashboardsOutput$
];
exports.ListManagedInsightRules$ = [9, n0, _LMIR,
    0, () => exports.ListManagedInsightRulesInput$, () => exports.ListManagedInsightRulesOutput$
];
exports.ListMetrics$ = [9, n0, _LMi,
    0, () => exports.ListMetricsInput$, () => exports.ListMetricsOutput$
];
exports.ListMetricStreams$ = [9, n0, _LMS,
    0, () => exports.ListMetricStreamsInput$, () => exports.ListMetricStreamsOutput$
];
exports.ListTagsForResource$ = [9, n0, _LTFR,
    0, () => exports.ListTagsForResourceInput$, () => exports.ListTagsForResourceOutput$
];
exports.PutAlarmMuteRule$ = [9, n0, _PAMR,
    0, () => exports.PutAlarmMuteRuleInput$, () => __Unit
];
exports.PutAnomalyDetector$ = [9, n0, _PAD,
    0, () => exports.PutAnomalyDetectorInput$, () => exports.PutAnomalyDetectorOutput$
];
exports.PutCompositeAlarm$ = [9, n0, _PCA,
    0, () => exports.PutCompositeAlarmInput$, () => __Unit
];
exports.PutDashboard$ = [9, n0, _PD,
    0, () => exports.PutDashboardInput$, () => exports.PutDashboardOutput$
];
exports.PutInsightRule$ = [9, n0, _PIR,
    0, () => exports.PutInsightRuleInput$, () => exports.PutInsightRuleOutput$
];
exports.PutManagedInsightRules$ = [9, n0, _PMIR,
    0, () => exports.PutManagedInsightRulesInput$, () => exports.PutManagedInsightRulesOutput$
];
exports.PutMetricAlarm$ = [9, n0, _PMA,
    0, () => exports.PutMetricAlarmInput$, () => __Unit
];
exports.PutMetricData$ = [9, n0, _PMD,
    0, () => exports.PutMetricDataInput$, () => __Unit
];
exports.PutMetricStream$ = [9, n0, _PMS,
    0, () => exports.PutMetricStreamInput$, () => exports.PutMetricStreamOutput$
];
exports.SetAlarmState$ = [9, n0, _SAS,
    0, () => exports.SetAlarmStateInput$, () => __Unit
];
exports.StartMetricStreams$ = [9, n0, _SMS,
    0, () => exports.StartMetricStreamsInput$, () => exports.StartMetricStreamsOutput$
];
exports.StopMetricStreams$ = [9, n0, _SMSt,
    0, () => exports.StopMetricStreamsInput$, () => exports.StopMetricStreamsOutput$
];
exports.TagResource$ = [9, n0, _TR,
    0, () => exports.TagResourceInput$, () => exports.TagResourceOutput$
];
exports.UntagResource$ = [9, n0, _UR,
    0, () => exports.UntagResourceInput$, () => exports.UntagResourceOutput$
];
