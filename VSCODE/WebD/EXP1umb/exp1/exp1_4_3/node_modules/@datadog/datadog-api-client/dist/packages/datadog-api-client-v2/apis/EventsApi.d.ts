import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { EventCreateRequestPayload } from "../models/EventCreateRequestPayload";
import { EventCreateResponsePayload } from "../models/EventCreateResponsePayload";
import { EventResponse } from "../models/EventResponse";
import { EventsListRequest } from "../models/EventsListRequest";
import { EventsListResponse } from "../models/EventsListResponse";
import { EventsSort } from "../models/EventsSort";
import { V2EventResponse } from "../models/V2EventResponse";
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    createEvent(body: EventCreateRequestPayload, _options?: Configuration): Promise<RequestContext>;
    getEvent(eventId: string, _options?: Configuration): Promise<RequestContext>;
    listEvents(filterQuery?: string, filterFrom?: string, filterTo?: string, sort?: EventsSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    searchEvents(body?: EventsListRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createEvent(response: ResponseContext): Promise<EventCreateResponsePayload>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    getEvent(response: ResponseContext): Promise<V2EventResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listEvents(response: ResponseContext): Promise<EventsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchEvents(response: ResponseContext): Promise<EventsListResponse>;
}
export interface EventsApiCreateEventRequest {
    /**
     * Event creation request payload.
     * @type EventCreateRequestPayload
     */
    body: EventCreateRequestPayload;
}
export interface EventsApiGetEventRequest {
    /**
     * The UID of the event.
     * @type string
     */
    eventId: string;
}
export interface EventsApiListEventsRequest {
    /**
     * Search query following events syntax.
     * @type string
     */
    filterQuery?: string;
    /**
     * Minimum timestamp for requested events, in milliseconds.
     * @type string
     */
    filterFrom?: string;
    /**
     * Maximum timestamp for requested events, in milliseconds.
     * @type string
     */
    filterTo?: string;
    /**
     * Order of events in results.
     * @type EventsSort
     */
    sort?: EventsSort;
    /**
     * List following results with a cursor provided in the previous query.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of events in the response.
     * @type number
     */
    pageLimit?: number;
}
export interface EventsApiSearchEventsRequest {
    /**
     * @type EventsListRequest
     */
    body?: EventsListRequest;
}
export declare class EventsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    /**
     * This endpoint allows you to publish events.
     *
     * **Note:** To utilize this endpoint with our client libraries, please ensure you are using the latest version released on or after July 1, 2025. Earlier versions do not support this functionality.
     *
     * **Important:** Upgrade to the latest client library version to use the updated endpoint at `https://event-management-intake.{site}/api/v2/events`. Older client library versions of the Post an event (v2) API send requests to a deprecated endpoint (`https://api.{site}/api/v2/events`).
     *
     * ✅ **Only events with the `change` or `alert` category** are in General Availability. For change events, see [Change Tracking](https://docs.datadoghq.com/change_tracking) for more details.
     *
     * ❌ For use cases involving other event categories, use the V1 endpoint or reach out to [support](https://www.datadoghq.com/support/).
     * @param param The request object
     */
    createEvent(param: EventsApiCreateEventRequest, options?: Configuration): Promise<EventCreateResponsePayload>;
    /**
     * Get the details of an event by `event_id`.
     * @param param The request object
     */
    getEvent(param: EventsApiGetEventRequest, options?: Configuration): Promise<V2EventResponse>;
    /**
     * List endpoint returns events that match an events search query.
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to see your latest events.
     * @param param The request object
     */
    listEvents(param?: EventsApiListEventsRequest, options?: Configuration): Promise<EventsListResponse>;
    /**
     * Provide a paginated version of listEvents returning a generator with all the items.
     */
    listEventsWithPagination(param?: EventsApiListEventsRequest, options?: Configuration): AsyncGenerator<EventResponse>;
    /**
     * List endpoint returns events that match an events search query.
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to build complex events filtering and search.
     * @param param The request object
     */
    searchEvents(param?: EventsApiSearchEventsRequest, options?: Configuration): Promise<EventsListResponse>;
    /**
     * Provide a paginated version of searchEvents returning a generator with all the items.
     */
    searchEventsWithPagination(param?: EventsApiSearchEventsRequest, options?: Configuration): AsyncGenerator<EventResponse>;
}
