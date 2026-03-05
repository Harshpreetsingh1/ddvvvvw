import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SyntheticsAPITest } from "../models/SyntheticsAPITest";
import { SyntheticsAPITestResultFull } from "../models/SyntheticsAPITestResultFull";
import { SyntheticsBatchDetails } from "../models/SyntheticsBatchDetails";
import { SyntheticsBrowserTest } from "../models/SyntheticsBrowserTest";
import { SyntheticsBrowserTestResultFull } from "../models/SyntheticsBrowserTestResultFull";
import { SyntheticsCITestBody } from "../models/SyntheticsCITestBody";
import { SyntheticsDeleteTestsPayload } from "../models/SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "../models/SyntheticsDeleteTestsResponse";
import { SyntheticsFetchUptimesPayload } from "../models/SyntheticsFetchUptimesPayload";
import { SyntheticsGetAPITestLatestResultsResponse } from "../models/SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "../models/SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "../models/SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableRequest } from "../models/SyntheticsGlobalVariableRequest";
import { SyntheticsListGlobalVariablesResponse } from "../models/SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "../models/SyntheticsListTestsResponse";
import { SyntheticsLocations } from "../models/SyntheticsLocations";
import { SyntheticsMobileTest } from "../models/SyntheticsMobileTest";
import { SyntheticsPatchTestBody } from "../models/SyntheticsPatchTestBody";
import { SyntheticsPrivateLocation } from "../models/SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "../models/SyntheticsPrivateLocationCreationResponse";
import { SyntheticsTestDetails } from "../models/SyntheticsTestDetails";
import { SyntheticsTestDetailsWithoutSteps } from "../models/SyntheticsTestDetailsWithoutSteps";
import { SyntheticsTestUptime } from "../models/SyntheticsTestUptime";
import { SyntheticsTriggerBody } from "../models/SyntheticsTriggerBody";
import { SyntheticsTriggerCITestsResponse } from "../models/SyntheticsTriggerCITestsResponse";
import { SyntheticsUpdateTestPauseStatusPayload } from "../models/SyntheticsUpdateTestPauseStatusPayload";
export declare class SyntheticsApiRequestFactory extends BaseAPIRequestFactory {
    createGlobalVariable(body: SyntheticsGlobalVariableRequest, _options?: Configuration): Promise<RequestContext>;
    createPrivateLocation(body: SyntheticsPrivateLocation, _options?: Configuration): Promise<RequestContext>;
    createSyntheticsAPITest(body: SyntheticsAPITest, _options?: Configuration): Promise<RequestContext>;
    createSyntheticsBrowserTest(body: SyntheticsBrowserTest, _options?: Configuration): Promise<RequestContext>;
    createSyntheticsMobileTest(body: SyntheticsMobileTest, _options?: Configuration): Promise<RequestContext>;
    deleteGlobalVariable(variableId: string, _options?: Configuration): Promise<RequestContext>;
    deletePrivateLocation(locationId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTests(body: SyntheticsDeleteTestsPayload, _options?: Configuration): Promise<RequestContext>;
    editGlobalVariable(variableId: string, body: SyntheticsGlobalVariableRequest, _options?: Configuration): Promise<RequestContext>;
    fetchUptimes(body: SyntheticsFetchUptimesPayload, _options?: Configuration): Promise<RequestContext>;
    getAPITest(publicId: string, _options?: Configuration): Promise<RequestContext>;
    getAPITestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getAPITestResult(publicId: string, resultId: string, _options?: Configuration): Promise<RequestContext>;
    getBrowserTest(publicId: string, _options?: Configuration): Promise<RequestContext>;
    getBrowserTestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getBrowserTestResult(publicId: string, resultId: string, _options?: Configuration): Promise<RequestContext>;
    getGlobalVariable(variableId: string, _options?: Configuration): Promise<RequestContext>;
    getMobileTest(publicId: string, _options?: Configuration): Promise<RequestContext>;
    getPrivateLocation(locationId: string, _options?: Configuration): Promise<RequestContext>;
    getSyntheticsCIBatch(batchId: string, _options?: Configuration): Promise<RequestContext>;
    getSyntheticsDefaultLocations(_options?: Configuration): Promise<RequestContext>;
    getTest(publicId: string, _options?: Configuration): Promise<RequestContext>;
    listGlobalVariables(_options?: Configuration): Promise<RequestContext>;
    listLocations(_options?: Configuration): Promise<RequestContext>;
    listTests(pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    patchTest(publicId: string, body: SyntheticsPatchTestBody, _options?: Configuration): Promise<RequestContext>;
    searchTests(text?: string, includeFullConfig?: boolean, facetsOnly?: boolean, start?: number, count?: number, sort?: string, _options?: Configuration): Promise<RequestContext>;
    triggerCITests(body: SyntheticsCITestBody, _options?: Configuration): Promise<RequestContext>;
    triggerTests(body: SyntheticsTriggerBody, _options?: Configuration): Promise<RequestContext>;
    updateAPITest(publicId: string, body: SyntheticsAPITest, _options?: Configuration): Promise<RequestContext>;
    updateBrowserTest(publicId: string, body: SyntheticsBrowserTest, _options?: Configuration): Promise<RequestContext>;
    updateMobileTest(publicId: string, body: SyntheticsMobileTest, _options?: Configuration): Promise<RequestContext>;
    updatePrivateLocation(locationId: string, body: SyntheticsPrivateLocation, _options?: Configuration): Promise<RequestContext>;
    updateTestPauseStatus(publicId: string, body: SyntheticsUpdateTestPauseStatusPayload, _options?: Configuration): Promise<RequestContext>;
}
export declare class SyntheticsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    createGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocationCreationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSyntheticsAPITest(response: ResponseContext): Promise<SyntheticsAPITest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSyntheticsBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSyntheticsMobileTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSyntheticsMobileTest(response: ResponseContext): Promise<SyntheticsMobileTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteGlobalVariable(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePrivateLocation(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTests(response: ResponseContext): Promise<SyntheticsDeleteTestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    editGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchUptimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    fetchUptimes(response: ResponseContext): Promise<Array<SyntheticsTestUptime>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPITest(response: ResponseContext): Promise<SyntheticsAPITest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITestLatestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPITestLatestResults(response: ResponseContext): Promise<SyntheticsGetAPITestLatestResultsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPITestResult
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPITestResult(response: ResponseContext): Promise<SyntheticsAPITestResultFull>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTestLatestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBrowserTestLatestResults(response: ResponseContext): Promise<SyntheticsGetBrowserTestLatestResultsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrowserTestResult
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBrowserTestResult(response: ResponseContext): Promise<SyntheticsBrowserTestResultFull>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGlobalVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    getGlobalVariable(response: ResponseContext): Promise<SyntheticsGlobalVariable>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMobileTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMobileTest(response: ResponseContext): Promise<SyntheticsMobileTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSyntheticsCIBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSyntheticsCIBatch(response: ResponseContext): Promise<SyntheticsBatchDetails>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSyntheticsDefaultLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSyntheticsDefaultLocations(response: ResponseContext): Promise<Array<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTest(response: ResponseContext): Promise<SyntheticsTestDetailsWithoutSteps>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGlobalVariables
     * @throws ApiException if the response code was not in [200, 299]
     */
    listGlobalVariables(response: ResponseContext): Promise<SyntheticsListGlobalVariablesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLocations(response: ResponseContext): Promise<SyntheticsLocations>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTests(response: ResponseContext): Promise<SyntheticsListTestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchTest(response: ResponseContext): Promise<SyntheticsTestDetails>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchTests(response: ResponseContext): Promise<SyntheticsListTestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerCITests
     * @throws ApiException if the response code was not in [200, 299]
     */
    triggerCITests(response: ResponseContext): Promise<SyntheticsTriggerCITestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    triggerTests(response: ResponseContext): Promise<SyntheticsTriggerCITestsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPITest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPITest(response: ResponseContext): Promise<SyntheticsAPITest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBrowserTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateBrowserTest(response: ResponseContext): Promise<SyntheticsBrowserTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMobileTest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMobileTest(response: ResponseContext): Promise<SyntheticsMobileTest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePrivateLocation
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePrivateLocation(response: ResponseContext): Promise<SyntheticsPrivateLocation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTestPauseStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTestPauseStatus(response: ResponseContext): Promise<boolean>;
}
export interface SyntheticsApiCreateGlobalVariableRequest {
    /**
     * Details of the global variable to create.
     * @type SyntheticsGlobalVariableRequest
     */
    body: SyntheticsGlobalVariableRequest;
}
export interface SyntheticsApiCreatePrivateLocationRequest {
    /**
     * Details of the private location to create.
     * @type SyntheticsPrivateLocation
     */
    body: SyntheticsPrivateLocation;
}
export interface SyntheticsApiCreateSyntheticsAPITestRequest {
    /**
     * Details of the test to create.
     * @type SyntheticsAPITest
     */
    body: SyntheticsAPITest;
}
export interface SyntheticsApiCreateSyntheticsBrowserTestRequest {
    /**
     * Details of the test to create.
     * @type SyntheticsBrowserTest
     */
    body: SyntheticsBrowserTest;
}
export interface SyntheticsApiCreateSyntheticsMobileTestRequest {
    /**
     * Details of the test to create.
     * @type SyntheticsMobileTest
     */
    body: SyntheticsMobileTest;
}
export interface SyntheticsApiDeleteGlobalVariableRequest {
    /**
     * The ID of the global variable.
     * @type string
     */
    variableId: string;
}
export interface SyntheticsApiDeletePrivateLocationRequest {
    /**
     * The ID of the private location.
     * @type string
     */
    locationId: string;
}
export interface SyntheticsApiDeleteTestsRequest {
    /**
     * Public ID list of the Synthetic tests to be deleted.
     * @type SyntheticsDeleteTestsPayload
     */
    body: SyntheticsDeleteTestsPayload;
}
export interface SyntheticsApiEditGlobalVariableRequest {
    /**
     * The ID of the global variable.
     * @type string
     */
    variableId: string;
    /**
     * Details of the global variable to update.
     * @type SyntheticsGlobalVariableRequest
     */
    body: SyntheticsGlobalVariableRequest;
}
export interface SyntheticsApiFetchUptimesRequest {
    /**
     * Public ID list of the Synthetic tests and timeframe.
     * @type SyntheticsFetchUptimesPayload
     */
    body: SyntheticsFetchUptimesPayload;
}
export interface SyntheticsApiGetAPITestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     */
    publicId: string;
}
export interface SyntheticsApiGetAPITestLatestResultsRequest {
    /**
     * The public ID of the test for which to search results for.
     * @type string
     */
    publicId: string;
    /**
     * Timestamp in milliseconds from which to start querying results.
     * @type number
     */
    fromTs?: number;
    /**
     * Timestamp in milliseconds up to which to query results.
     * @type number
     */
    toTs?: number;
    /**
     * Locations for which to query results.
     * @type Array<string>
     */
    probeDc?: Array<string>;
}
export interface SyntheticsApiGetAPITestResultRequest {
    /**
     * The public ID of the API test to which the target result belongs.
     * @type string
     */
    publicId: string;
    /**
     * The ID of the result to get.
     * @type string
     */
    resultId: string;
}
export interface SyntheticsApiGetBrowserTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     */
    publicId: string;
}
export interface SyntheticsApiGetBrowserTestLatestResultsRequest {
    /**
     * The public ID of the browser test for which to search results
     * for.
     * @type string
     */
    publicId: string;
    /**
     * Timestamp in milliseconds from which to start querying results.
     * @type number
     */
    fromTs?: number;
    /**
     * Timestamp in milliseconds up to which to query results.
     * @type number
     */
    toTs?: number;
    /**
     * Locations for which to query results.
     * @type Array<string>
     */
    probeDc?: Array<string>;
}
export interface SyntheticsApiGetBrowserTestResultRequest {
    /**
     * The public ID of the browser test to which the target result
     * belongs.
     * @type string
     */
    publicId: string;
    /**
     * The ID of the result to get.
     * @type string
     */
    resultId: string;
}
export interface SyntheticsApiGetGlobalVariableRequest {
    /**
     * The ID of the global variable.
     * @type string
     */
    variableId: string;
}
export interface SyntheticsApiGetMobileTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     */
    publicId: string;
}
export interface SyntheticsApiGetPrivateLocationRequest {
    /**
     * The ID of the private location.
     * @type string
     */
    locationId: string;
}
export interface SyntheticsApiGetSyntheticsCIBatchRequest {
    /**
     * The ID of the batch.
     * @type string
     */
    batchId: string;
}
export interface SyntheticsApiGetTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     */
    publicId: string;
}
export interface SyntheticsApiListTestsRequest {
    /**
     * Used for pagination. The number of tests returned in the page.
     * @type number
     */
    pageSize?: number;
    /**
     * Used for pagination. Which page you want to retrieve. Starts at zero.
     * @type number
     */
    pageNumber?: number;
}
export interface SyntheticsApiPatchTestRequest {
    /**
     * The public ID of the test to patch.
     * @type string
     */
    publicId: string;
    /**
     * [JSON Patch](https://jsonpatch.com/) compliant list of operations
     * @type SyntheticsPatchTestBody
     */
    body: SyntheticsPatchTestBody;
}
export interface SyntheticsApiSearchTestsRequest {
    /**
     * The search query.
     * @type string
     */
    text?: string;
    /**
     * If true, include the full configuration for each test in the response.
     * @type boolean
     */
    includeFullConfig?: boolean;
    /**
     * If true, return only facets instead of full test details.
     * @type boolean
     */
    facetsOnly?: boolean;
    /**
     * The offset from which to start returning results.
     * @type number
     */
    start?: number;
    /**
     * The maximum number of results to return.
     * @type number
     */
    count?: number;
    /**
     * The sort order for the results (e.g., `name,asc` or `name,desc`).
     * @type string
     */
    sort?: string;
}
export interface SyntheticsApiTriggerCITestsRequest {
    /**
     * Details of the test to trigger.
     * @type SyntheticsCITestBody
     */
    body: SyntheticsCITestBody;
}
export interface SyntheticsApiTriggerTestsRequest {
    /**
     * The identifiers of the tests to trigger.
     * @type SyntheticsTriggerBody
     */
    body: SyntheticsTriggerBody;
}
export interface SyntheticsApiUpdateAPITestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     */
    publicId: string;
    /**
     * New test details to be saved.
     * @type SyntheticsAPITest
     */
    body: SyntheticsAPITest;
}
export interface SyntheticsApiUpdateBrowserTestRequest {
    /**
     * The public ID of the test to edit.
     * @type string
     */
    publicId: string;
    /**
     * New test details to be saved.
     * @type SyntheticsBrowserTest
     */
    body: SyntheticsBrowserTest;
}
export interface SyntheticsApiUpdateMobileTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     */
    publicId: string;
    /**
     * New test details to be saved.
     * @type SyntheticsMobileTest
     */
    body: SyntheticsMobileTest;
}
export interface SyntheticsApiUpdatePrivateLocationRequest {
    /**
     * The ID of the private location.
     * @type string
     */
    locationId: string;
    /**
     * Details of the private location to be updated.
     * @type SyntheticsPrivateLocation
     */
    body: SyntheticsPrivateLocation;
}
export interface SyntheticsApiUpdateTestPauseStatusRequest {
    /**
     * The public ID of the Synthetic test to update.
     * @type string
     */
    publicId: string;
    /**
     * Status to set the given Synthetic test to.
     * @type SyntheticsUpdateTestPauseStatusPayload
     */
    body: SyntheticsUpdateTestPauseStatusPayload;
}
export declare class SyntheticsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SyntheticsApiRequestFactory, responseProcessor?: SyntheticsApiResponseProcessor);
    /**
     * Create a Synthetic global variable.
     * @param param The request object
     */
    createGlobalVariable(param: SyntheticsApiCreateGlobalVariableRequest, options?: Configuration): Promise<SyntheticsGlobalVariable>;
    /**
     * Create a new Synthetic private location.
     * @param param The request object
     */
    createPrivateLocation(param: SyntheticsApiCreatePrivateLocationRequest, options?: Configuration): Promise<SyntheticsPrivateLocationCreationResponse>;
    /**
     * Create a Synthetic API test.
     * @param param The request object
     */
    createSyntheticsAPITest(param: SyntheticsApiCreateSyntheticsAPITestRequest, options?: Configuration): Promise<SyntheticsAPITest>;
    /**
     * Create a Synthetic browser test.
     * @param param The request object
     */
    createSyntheticsBrowserTest(param: SyntheticsApiCreateSyntheticsBrowserTestRequest, options?: Configuration): Promise<SyntheticsBrowserTest>;
    /**
     * Create a Synthetic mobile test.
     * @param param The request object
     */
    createSyntheticsMobileTest(param: SyntheticsApiCreateSyntheticsMobileTestRequest, options?: Configuration): Promise<SyntheticsMobileTest>;
    /**
     * Delete a Synthetic global variable.
     * @param param The request object
     */
    deleteGlobalVariable(param: SyntheticsApiDeleteGlobalVariableRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a Synthetic private location.
     * @param param The request object
     */
    deletePrivateLocation(param: SyntheticsApiDeletePrivateLocationRequest, options?: Configuration): Promise<void>;
    /**
     * Delete multiple Synthetic tests by ID.
     * @param param The request object
     */
    deleteTests(param: SyntheticsApiDeleteTestsRequest, options?: Configuration): Promise<SyntheticsDeleteTestsResponse>;
    /**
     * Edit a Synthetic global variable.
     * @param param The request object
     */
    editGlobalVariable(param: SyntheticsApiEditGlobalVariableRequest, options?: Configuration): Promise<SyntheticsGlobalVariable>;
    /**
     * Fetch uptime for multiple Synthetic tests by ID.
     * @param param The request object
     */
    fetchUptimes(param: SyntheticsApiFetchUptimesRequest, options?: Configuration): Promise<Array<SyntheticsTestUptime>>;
    /**
     * Get the detailed configuration associated with
     * a Synthetic API test.
     * @param param The request object
     */
    getAPITest(param: SyntheticsApiGetAPITestRequest, options?: Configuration): Promise<SyntheticsAPITest>;
    /**
     * Get the last 150 test results summaries for a given Synthetic API test.
     * @param param The request object
     */
    getAPITestLatestResults(param: SyntheticsApiGetAPITestLatestResultsRequest, options?: Configuration): Promise<SyntheticsGetAPITestLatestResultsResponse>;
    /**
     * Get a specific full result from a given Synthetic API test.
     * @param param The request object
     */
    getAPITestResult(param: SyntheticsApiGetAPITestResultRequest, options?: Configuration): Promise<SyntheticsAPITestResultFull>;
    /**
     * Get the detailed configuration (including steps) associated with
     * a Synthetic browser test.
     * @param param The request object
     */
    getBrowserTest(param: SyntheticsApiGetBrowserTestRequest, options?: Configuration): Promise<SyntheticsBrowserTest>;
    /**
     * Get the last 150 test results summaries for a given Synthetic browser test.
     * @param param The request object
     */
    getBrowserTestLatestResults(param: SyntheticsApiGetBrowserTestLatestResultsRequest, options?: Configuration): Promise<SyntheticsGetBrowserTestLatestResultsResponse>;
    /**
     * Get a specific full result from a given Synthetic browser test.
     * @param param The request object
     */
    getBrowserTestResult(param: SyntheticsApiGetBrowserTestResultRequest, options?: Configuration): Promise<SyntheticsBrowserTestResultFull>;
    /**
     * Get the detailed configuration of a global variable.
     * @param param The request object
     */
    getGlobalVariable(param: SyntheticsApiGetGlobalVariableRequest, options?: Configuration): Promise<SyntheticsGlobalVariable>;
    /**
     * Get the detailed configuration associated with
     * a Synthetic Mobile test.
     * @param param The request object
     */
    getMobileTest(param: SyntheticsApiGetMobileTestRequest, options?: Configuration): Promise<SyntheticsMobileTest>;
    /**
     * Get a Synthetic private location.
     * @param param The request object
     */
    getPrivateLocation(param: SyntheticsApiGetPrivateLocationRequest, options?: Configuration): Promise<SyntheticsPrivateLocation>;
    /**
     * Get a batch's updated details.
     * @param param The request object
     */
    getSyntheticsCIBatch(param: SyntheticsApiGetSyntheticsCIBatchRequest, options?: Configuration): Promise<SyntheticsBatchDetails>;
    /**
     * Get the default locations settings.
     * @param param The request object
     */
    getSyntheticsDefaultLocations(options?: Configuration): Promise<Array<string>>;
    /**
     * Get the detailed configuration associated with a Synthetic test.
     * @param param The request object
     */
    getTest(param: SyntheticsApiGetTestRequest, options?: Configuration): Promise<SyntheticsTestDetailsWithoutSteps>;
    /**
     * Get the list of all Synthetic global variables.
     * @param param The request object
     */
    listGlobalVariables(options?: Configuration): Promise<SyntheticsListGlobalVariablesResponse>;
    /**
     * Get the list of public and private locations available for Synthetic
     * tests. No arguments required.
     * @param param The request object
     */
    listLocations(options?: Configuration): Promise<SyntheticsLocations>;
    /**
     * Get the list of all Synthetic tests.
     * @param param The request object
     */
    listTests(param?: SyntheticsApiListTestsRequest, options?: Configuration): Promise<SyntheticsListTestsResponse>;
    /**
     * Provide a paginated version of listTests returning a generator with all the items.
     */
    listTestsWithPagination(param?: SyntheticsApiListTestsRequest, options?: Configuration): AsyncGenerator<SyntheticsTestDetailsWithoutSteps>;
    /**
     * Patch the configuration of a Synthetic test with partial data.
     * @param param The request object
     */
    patchTest(param: SyntheticsApiPatchTestRequest, options?: Configuration): Promise<SyntheticsTestDetails>;
    /**
     * Search for Synthetic tests.
     * @param param The request object
     */
    searchTests(param?: SyntheticsApiSearchTestsRequest, options?: Configuration): Promise<SyntheticsListTestsResponse>;
    /**
     * Trigger a set of Synthetic tests for continuous integration.
     * @param param The request object
     */
    triggerCITests(param: SyntheticsApiTriggerCITestsRequest, options?: Configuration): Promise<SyntheticsTriggerCITestsResponse>;
    /**
     * Trigger a set of Synthetic tests.
     * @param param The request object
     */
    triggerTests(param: SyntheticsApiTriggerTestsRequest, options?: Configuration): Promise<SyntheticsTriggerCITestsResponse>;
    /**
     * Edit the configuration of a Synthetic API test.
     * @param param The request object
     */
    updateAPITest(param: SyntheticsApiUpdateAPITestRequest, options?: Configuration): Promise<SyntheticsAPITest>;
    /**
     * Edit the configuration of a Synthetic browser test.
     * @param param The request object
     */
    updateBrowserTest(param: SyntheticsApiUpdateBrowserTestRequest, options?: Configuration): Promise<SyntheticsBrowserTest>;
    /**
     * Edit the configuration of a Synthetic Mobile test.
     * @param param The request object
     */
    updateMobileTest(param: SyntheticsApiUpdateMobileTestRequest, options?: Configuration): Promise<SyntheticsMobileTest>;
    /**
     * Edit a Synthetic private location.
     * @param param The request object
     */
    updatePrivateLocation(param: SyntheticsApiUpdatePrivateLocationRequest, options?: Configuration): Promise<SyntheticsPrivateLocation>;
    /**
     * Pause or start a Synthetic test by changing the status.
     * @param param The request object
     */
    updateTestPauseStatus(param: SyntheticsApiUpdateTestPauseStatusRequest, options?: Configuration): Promise<boolean>;
}
