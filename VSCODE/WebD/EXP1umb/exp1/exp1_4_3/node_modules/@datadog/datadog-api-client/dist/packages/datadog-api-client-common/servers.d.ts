import { RequestContext, HttpMethod } from "./http/http";
/**
 *
 * Represents the configuration of a server
 *
 */
export declare class BaseServerConfiguration {
    private url;
    private variableConfiguration;
    constructor(url: string, variableConfiguration: {
        [key: string]: string;
    });
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    setVariables(variableConfiguration: {
        [key: string]: string;
    }): void;
    getConfiguration(): {
        [key: string]: string;
    };
    clone(): BaseServerConfiguration;
    private getUrl;
    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export declare class ServerConfiguration<T extends {
    [key: string]: string;
}> extends BaseServerConfiguration {
}
export declare const server1: ServerConfiguration<{
    site: "datadoghq.com" | "us3.datadoghq.com" | "us5.datadoghq.com" | "ap1.datadoghq.com" | "ap2.datadoghq.com" | "datadoghq.eu" | "ddog-gov.com";
    subdomain: string;
}>;
export declare const server2: ServerConfiguration<{
    name: string;
    protocol: string;
}>;
export declare const server3: ServerConfiguration<{
    site: string;
    subdomain: string;
}>;
export declare const servers: ServerConfiguration<{
    site: "datadoghq.com" | "us3.datadoghq.com" | "us5.datadoghq.com" | "ap1.datadoghq.com" | "ap2.datadoghq.com" | "datadoghq.eu" | "ddog-gov.com";
    subdomain: string;
}>[];
export declare const operationServers: {
    [endpoint: string]: BaseServerConfiguration[];
};
