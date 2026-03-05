import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { FlakyTest } from "../models/FlakyTest";
import { FlakyTestsSearchRequest } from "../models/FlakyTestsSearchRequest";
import { FlakyTestsSearchResponse } from "../models/FlakyTestsSearchResponse";
import { UpdateFlakyTestsRequest } from "../models/UpdateFlakyTestsRequest";
import { UpdateFlakyTestsResponse } from "../models/UpdateFlakyTestsResponse";
export declare class TestOptimizationApiRequestFactory extends BaseAPIRequestFactory {
    searchFlakyTests(body?: FlakyTestsSearchRequest, _options?: Configuration): Promise<RequestContext>;
    updateFlakyTests(body: UpdateFlakyTestsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class TestOptimizationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchFlakyTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchFlakyTests(response: ResponseContext): Promise<FlakyTestsSearchResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFlakyTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateFlakyTests(response: ResponseContext): Promise<UpdateFlakyTestsResponse>;
}
export interface TestOptimizationApiSearchFlakyTestsRequest {
    /**
     * @type FlakyTestsSearchRequest
     */
    body?: FlakyTestsSearchRequest;
}
export interface TestOptimizationApiUpdateFlakyTestsRequest {
    /**
     * @type UpdateFlakyTestsRequest
     */
    body: UpdateFlakyTestsRequest;
}
export declare class TestOptimizationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TestOptimizationApiRequestFactory, responseProcessor?: TestOptimizationApiResponseProcessor);
    /**
     * List endpoint returning flaky tests from Flaky Test Management. Results are paginated.
     *
     * The response includes comprehensive test information including:
     * - Test identification and metadata (module, suite, name)
     * - Flaky state and categorization
     * - First and last flake occurrences (timestamp, branch, commit SHA)
     * - Test execution statistics from the last 7 days (failure rate)
     * - Pipeline impact metrics (failed pipelines count, total lost time)
     * - Complete status change history (optional, ordered from most recent to oldest)
     *
     * Set `include_history` to `true` in the request to receive the status change history for each test.
     * History is disabled by default for better performance.
     *
     * Results support filtering by various facets including service, environment, repository, branch, and test state.
     * @param param The request object
     */
    searchFlakyTests(param?: TestOptimizationApiSearchFlakyTestsRequest, options?: Configuration): Promise<FlakyTestsSearchResponse>;
    /**
     * Provide a paginated version of searchFlakyTests returning a generator with all the items.
     */
    searchFlakyTestsWithPagination(param?: TestOptimizationApiSearchFlakyTestsRequest, options?: Configuration): AsyncGenerator<FlakyTest>;
    /**
     * Update the state of multiple flaky tests in Flaky Test Management.
     * @param param The request object
     */
    updateFlakyTests(param: TestOptimizationApiUpdateFlakyTestsRequest, options?: Configuration): Promise<UpdateFlakyTestsResponse>;
}
