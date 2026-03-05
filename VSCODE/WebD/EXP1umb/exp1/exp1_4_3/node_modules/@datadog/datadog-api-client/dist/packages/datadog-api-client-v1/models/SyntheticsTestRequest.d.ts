/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsTestCallType } from "./SyntheticsTestCallType";
import { SyntheticsTestOptionsHTTPVersion } from "./SyntheticsTestOptionsHTTPVersion";
import { SyntheticsTestRequestBodyFile } from "./SyntheticsTestRequestBodyFile";
import { SyntheticsTestRequestBodyType } from "./SyntheticsTestRequestBodyType";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { SyntheticsTestRequestDNSServerPort } from "./SyntheticsTestRequestDNSServerPort";
import { SyntheticsTestRequestPort } from "./SyntheticsTestRequestPort";
import { SyntheticsTestRequestProxy } from "./SyntheticsTestRequestProxy";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object describing the Synthetic test request.
 */
export declare class SyntheticsTestRequest {
    /**
     * Allows loading insecure content for an HTTP request in a multistep test step.
     */
    "allowInsecure"?: boolean;
    /**
     * Object to handle basic authentication when performing the test.
     */
    "basicAuth"?: SyntheticsBasicAuth;
    /**
     * Body to include in the test.
     */
    "body"?: string;
    /**
     * Type of the request body.
     */
    "bodyType"?: SyntheticsTestRequestBodyType;
    /**
     * The type of gRPC call to perform.
     */
    "callType"?: SyntheticsTestCallType;
    /**
     * Client certificate to use when performing the test request.
     */
    "certificate"?: SyntheticsTestRequestCertificate;
    /**
     * By default, the client certificate is applied on the domain of the starting URL for browser tests. If you want your client certificate to be applied on other domains instead, add them in `certificateDomains`.
     */
    "certificateDomains"?: Array<string>;
    /**
     * Check for certificate revocation.
     */
    "checkCertificateRevocation"?: boolean;
    /**
     * A protobuf JSON descriptor that needs to be gzipped first then base64 encoded.
     */
    "compressedJsonDescriptor"?: string;
    /**
     * A protobuf file that needs to be gzipped first then base64 encoded.
     */
    "compressedProtoFile"?: string;
    /**
     * Disable fetching intermediate certificates from AIA.
     */
    "disableAiaIntermediateFetching"?: boolean;
    /**
     * DNS server to use for DNS tests.
     */
    "dnsServer"?: string;
    /**
     * DNS server port to use for DNS tests.
     */
    "dnsServerPort"?: SyntheticsTestRequestDNSServerPort;
    /**
     * Files to be used as part of the request in the test. Only valid if `bodyType` is `multipart/form-data`.
     */
    "files"?: Array<SyntheticsTestRequestBodyFile>;
    /**
     * Specifies whether or not the request follows redirects.
     */
    "followRedirects"?: boolean;
    /**
     * Form to be used as part of the request in the test. Only valid if `bodyType` is `multipart/form-data`.
     */
    "form"?: {
        [key: string]: string;
    };
    /**
     * Headers to include when performing the test.
     */
    "headers"?: {
        [key: string]: string;
    };
    /**
     * Host name to perform the test with.
     */
    "host"?: string;
    /**
     * HTTP version to use for a Synthetic test.
     */
    "httpVersion"?: SyntheticsTestOptionsHTTPVersion;
    /**
     * Whether the message is base64 encoded.
     */
    "isMessageBase64Encoded"?: boolean;
    /**
     * Message to send for UDP or WebSocket tests.
     */
    "message"?: string;
    /**
     * Metadata to include when performing the gRPC test.
     */
    "metadata"?: {
        [key: string]: string;
    };
    /**
     * Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.
     */
    "method"?: string;
    /**
     * Determines whether or not to save the response body.
     */
    "noSavingResponseBody"?: boolean;
    /**
     * Number of pings to use per test.
     */
    "numberOfPackets"?: number;
    /**
     * Persist cookies across redirects.
     */
    "persistCookies"?: boolean;
    /**
     * Port to use when performing the test.
     */
    "port"?: SyntheticsTestRequestPort;
    /**
     * The proxy to perform the test.
     */
    "proxy"?: SyntheticsTestRequestProxy;
    /**
     * Query to use for the test.
     */
    "query"?: any;
    /**
     * For SSL tests, it specifies on which server you want to initiate the TLS handshake,
     * allowing the server to present one of multiple possible certificates on
     * the same IP address and TCP port number.
     */
    "servername"?: string;
    /**
     * The gRPC service on which you want to perform the gRPC call.
     */
    "service"?: string;
    /**
     * Turns on a traceroute probe to discover all gateways along the path to the host destination.
     */
    "shouldTrackHops"?: boolean;
    /**
     * Timeout in seconds for the test.
     */
    "timeout"?: number;
    /**
     * URL to perform the test with.
     */
    "url"?: string;
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
