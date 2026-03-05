import { HttpLibrary, HttpConfiguration, RequestContext, ZstdCompressorCallback } from "./http/http";
import { BaseServerConfiguration } from "./servers";
import { AuthMethods, AuthMethodsConfiguration } from "./auth";
export declare class Configuration {
    readonly baseServer?: BaseServerConfiguration;
    readonly serverIndex: number;
    readonly operationServerIndices: {
        [name: string]: number;
    };
    readonly httpApi: HttpLibrary;
    readonly authMethods: AuthMethods;
    readonly httpConfig: HttpConfiguration;
    readonly debug: boolean | undefined;
    readonly enableRetry: boolean | undefined;
    readonly maxRetries: number | undefined;
    readonly backoffBase: number | undefined;
    readonly backoffMultiplier: number | undefined;
    unstableOperations: {
        [name: string]: boolean;
    };
    servers: BaseServerConfiguration[];
    operationServers: {
        [endpoint: string]: BaseServerConfiguration[];
    };
    constructor(baseServer: BaseServerConfiguration | undefined, serverIndex: number, operationServerIndices: {
        [name: string]: number;
    }, httpApi: HttpLibrary, authMethods: AuthMethods, httpConfig: HttpConfiguration, debug: boolean | undefined, enableRetry: boolean | undefined, maxRetries: number | undefined, backoffBase: number | undefined, backoffMultiplier: number | undefined, unstableOperations: {
        [name: string]: boolean;
    });
    setServerVariables(serverVariables: {
        [key: string]: string;
    }): void;
    getServer(endpoint: string): BaseServerConfiguration;
}
/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
    /**
     * Default server to use (takes preference over serverIndex and operationServerIndices)
     */
    baseServer?: BaseServerConfiguration;
    /**
     * Default index of a server to use from the predefined server list
     */
    serverIndex?: number;
    /**
     * Default index of a server to use for an operation from the predefined server operation map
     */
    operationServerIndices?: {
        [name: string]: number;
    };
    /**
     * Custom `fetch` function
     */
    fetch?: any;
    /**
     * HTTP library to use e.g. IsomorphicFetch
     */
    httpApi?: HttpLibrary;
    /**
     * Configuration for the available authentication methods
     */
    authMethods?: AuthMethodsConfiguration;
    /**
     * Configuration for HTTP transport
     */
    httpConfig?: HttpConfiguration;
    /**
     * Flag to enable requests tracing
     */
    debug?: boolean;
    /**
     * Callback method to compress string body with zstd
     */
    zstdCompressorCallback?: ZstdCompressorCallback;
    /**
     * Maximum of retry attempts allowed
     */
    maxRetries?: number;
    /**
     * Backoff base
     */
    backoffBase?: number;
    /**
     * Backoff multiplier
     */
    backoffMultiplier?: number;
    /**
     * Enable retry on status code 429 or 5xx
     */
    enableRetry?: boolean;
}
/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: null
 *    - serverIndex: 0
 *    - operationServerIndices: {}
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - authMethods: {}
 *    - httpConfig: {}
 *    - debug: false
 *
 * @param conf partial configuration
 */
export declare function createConfiguration(conf?: ConfigurationParameters): Configuration;
export declare function getServer(conf: Configuration, endpoint: string): BaseServerConfiguration;
/**
 * Sets the server variables.
 *
 * @param serverVariables key/value object representing the server variables (site, name, protocol, ...)
 */
export declare function setServerVariables(conf: Configuration, serverVariables: {
    [key: string]: string;
}): void;
/**
 * Apply given security authentication method if avaiable in configuration.
 */
export declare function applySecurityAuthentication<AuthMethodKey extends keyof AuthMethods>(conf: Configuration, requestContext: RequestContext, authMethods: AuthMethodKey[]): void;
