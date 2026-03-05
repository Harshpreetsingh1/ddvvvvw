import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { EventCreateRequest } from "../models/EventCreateRequest";
import { EventCreateResponse } from "../models/EventCreateResponse";
import { EventListResponse } from "../models/EventListResponse";
import { EventPriority } from "../models/EventPriority";
import { EventResponse } from "../models/EventResponse";
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    createEvent(body: EventCreateRequest, _options?: Configuration): Promise<RequestContext>;
    getEvent(eventId: number, _options?: Configuration): Promise<RequestContext>;
    listEvents(start: number, end: number, priority?: EventPriority, sources?: string, tags?: string, unaggregated?: boolean, excludeAggregate?: boolean, page?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createEvent(response: ResponseContext): Promise<EventCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    getEvent(response: ResponseContext): Promise<EventResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listEvents(response: ResponseContext): Promise<EventListResponse>;
}
export interface EventsApiCreateEventRequest {
    /**
     * Event request object
     * @type EventCreateRequest
     */
    body: EventCreateRequest;
}
export interface EventsApiGetEventRequest {
    /**
     * The ID of the event.
     * @type number
     */
    eventId: number;
}
export interface EventsApiListEventsRequest {
    /**
     * POSIX timestamp.
     * @type number
     */
    start: number;
    /**
     * POSIX timestamp.
     * @type number
     */
    end: number;
    /**
     * Priority of your events, either `low` or `normal`.
     * @type EventPriority
     */
    priority?: EventPriority;
    /**
     * A comma separated string of sources.
     * @type string
     */
    sources?: string;
    /**
     * A comma separated list indicating what tags, if any, should be used to filter the list of events.
     * @type string
     */
    tags?: string;
    /**
     * Set unaggregated to `true` to return all events within the specified [`start`,`end`] timeframe.
     * Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe,
     * it won't be available in the output. Aggregated events with `is_aggregate=true` in the response will still be returned unless exclude_aggregate is set to `true.`
     * @type boolean
     */
    unaggregated?: boolean;
    /**
     * Set `exclude_aggregate` to `true` to only return unaggregated events where `is_aggregate=false` in the response. If the `exclude_aggregate` parameter is set to `true`,
     * then the unaggregated parameter is ignored and will be `true` by default.
     * @type boolean
     */
    excludeAggregate?: boolean;
    /**
     * By default 1000 results are returned per request. Set page to the number of the page to return with `0` being the first page. The page parameter can only be used
     * when either unaggregated or exclude_aggregate is set to `true.`
     * @type number
     */
    page?: number;
}
export declare class EventsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    /**
     * This endpoint allows you to post events to the stream.
     * Tag them, set priority and event aggregate them with other events.
     * @param param The request object
     */
    createEvent(param: EventsApiCreateEventRequest, options?: Configuration): Promise<EventCreateResponse>;
    /**
     * This endpoint allows you to query for event details.
     *
     * **Note**: If the event you’re querying contains markdown formatting of any kind,
     * you may see characters such as `%`,`\`,`n` in your output.
     * @param param The request object
     */
    getEvent(param: EventsApiGetEventRequest, options?: Configuration): Promise<EventResponse>;
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.
     *
     * **Notes**:
     * - If the event you’re querying contains markdown formatting of any kind,
     * you may see characters such as `%`,`\`,`n` in your output.
     *
     * - This endpoint returns a maximum of `1000` most recent results. To return additional results,
     * identify the last timestamp of the last result and set that as the `end` query time to
     * paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * @param param The request object
     */
    listEvents(param: EventsApiListEventsRequest, options?: Configuration): Promise<EventListResponse>;
}
