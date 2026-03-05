import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AWSAccountAndLambdaRequest } from "../models/AWSAccountAndLambdaRequest";
import { AWSLogsAsyncResponse } from "../models/AWSLogsAsyncResponse";
import { AWSLogsListResponse } from "../models/AWSLogsListResponse";
import { AWSLogsListServicesResponse } from "../models/AWSLogsListServicesResponse";
import { AWSLogsServicesRequest } from "../models/AWSLogsServicesRequest";
export declare class AWSLogsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    checkAWSLogsLambdaAsync(body: AWSAccountAndLambdaRequest, _options?: Configuration): Promise<RequestContext>;
    checkAWSLogsServicesAsync(body: AWSLogsServicesRequest, _options?: Configuration): Promise<RequestContext>;
    createAWSLambdaARN(body: AWSAccountAndLambdaRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAWSLambdaARN(body: AWSAccountAndLambdaRequest, _options?: Configuration): Promise<RequestContext>;
    enableAWSLogServices(body: AWSLogsServicesRequest, _options?: Configuration): Promise<RequestContext>;
    listAWSLogsIntegrations(_options?: Configuration): Promise<RequestContext>;
    listAWSLogsServices(_options?: Configuration): Promise<RequestContext>;
}
export declare class AWSLogsIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkAWSLogsLambdaAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkAWSLogsLambdaAsync(response: ResponseContext): Promise<AWSLogsAsyncResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkAWSLogsServicesAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkAWSLogsServicesAsync(response: ResponseContext): Promise<AWSLogsAsyncResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSLambdaARN
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSLambdaARN(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSLambdaARN
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSLambdaARN(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enableAWSLogServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    enableAWSLogServices(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSLogsIntegrations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSLogsIntegrations(response: ResponseContext): Promise<Array<AWSLogsListResponse>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSLogsServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSLogsServices(response: ResponseContext): Promise<Array<AWSLogsListServicesResponse>>;
}
export interface AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest {
    /**
     * Check AWS Log Lambda Async request body.
     * @type AWSAccountAndLambdaRequest
     */
    body: AWSAccountAndLambdaRequest;
}
export interface AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest {
    /**
     * Check AWS Logs Async Services request body.
     * @type AWSLogsServicesRequest
     */
    body: AWSLogsServicesRequest;
}
export interface AWSLogsIntegrationApiCreateAWSLambdaARNRequest {
    /**
     * AWS Log Lambda Async request body.
     * @type AWSAccountAndLambdaRequest
     */
    body: AWSAccountAndLambdaRequest;
}
export interface AWSLogsIntegrationApiDeleteAWSLambdaARNRequest {
    /**
     * Delete AWS Lambda ARN request body.
     * @type AWSAccountAndLambdaRequest
     */
    body: AWSAccountAndLambdaRequest;
}
export interface AWSLogsIntegrationApiEnableAWSLogServicesRequest {
    /**
     * Enable AWS Log Services request body.
     * @type AWSLogsServicesRequest
     */
    body: AWSLogsServicesRequest;
}
export declare class AWSLogsIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AWSLogsIntegrationApiRequestFactory, responseProcessor?: AWSLogsIntegrationApiResponseProcessor);
    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input
     * is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this
     * endpoint can be polled intermittently instead of blocking.
     *
     * - Returns a status of 'created' when it's checking if the Lambda exists in the account.
     * - Returns a status of 'waiting' while checking.
     * - Returns a status of 'checked and ok' if the Lambda exists.
     * - Returns a status of 'error' if the Lambda does not exist.
     * @param param The request object
     */
    checkAWSLogsLambdaAsync(param: AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest, options?: Configuration): Promise<AWSLogsAsyncResponse>;
    /**
     * Test if permissions are present to add log-forwarding triggers for the
     * given services and AWS account. Input is the same as for `EnableAWSLogServices`.
     * Done async, so can be repeatedly polled in a non-blocking fashion until
     * the async request completes.
     *
     * - Returns a status of `created` when it's checking if the permissions exists
     *   in the AWS account.
     * - Returns a status of `waiting` while checking.
     * - Returns a status of `checked and ok` if the Lambda exists.
     * - Returns a status of `error` if the Lambda does not exist.
     * @param param The request object
     */
    checkAWSLogsServicesAsync(param: AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest, options?: Configuration): Promise<AWSLogsAsyncResponse>;
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * @param param The request object
     */
    createAWSLambdaARN(param: AWSLogsIntegrationApiCreateAWSLambdaARNRequest, options?: Configuration): Promise<any>;
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * @param param The request object
     */
    deleteAWSLambdaARN(param: AWSLogsIntegrationApiDeleteAWSLambdaARNRequest, options?: Configuration): Promise<any>;
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * @param param The request object
     */
    enableAWSLogServices(param: AWSLogsIntegrationApiEnableAWSLogServicesRequest, options?: Configuration): Promise<any>;
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * @param param The request object
     */
    listAWSLogsIntegrations(options?: Configuration): Promise<Array<AWSLogsListResponse>>;
    /**
     * **This endpoint is deprecated - use the V2 endpoint instead.** Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * @param param The request object
     */
    listAWSLogsServices(options?: Configuration): Promise<Array<AWSLogsListServicesResponse>>;
}
