import { RequestContext } from "./http/http";
/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    getName(): string;
    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
/**
 * Applies oauth2 authentication to the request context.
 */
export declare class AuthZAuthentication implements SecurityAuthentication {
    private accessToken;
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    constructor(accessToken: string);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void;
}
/**
 * Applies apiKey authentication to the request context.
 */
export declare class ApiKeyAuthAuthentication implements SecurityAuthentication {
    private apiKey;
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    constructor(apiKey: string);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void;
}
/**
 * Applies apiKey authentication to the request context.
 */
export declare class AppKeyAuthAuthentication implements SecurityAuthentication {
    private apiKey;
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    constructor(apiKey: string);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void;
}
export declare type AuthMethods = {
    AuthZ?: SecurityAuthentication;
    apiKeyAuth?: SecurityAuthentication;
    appKeyAuth?: SecurityAuthentication;
};
export declare type ApiKeyConfiguration = string;
export declare type HttpBasicConfiguration = {
    username: string;
    password: string;
};
export declare type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export declare type OAuth2Configuration = {
    accessToken: string;
};
export declare type AuthMethodsConfiguration = {
    AuthZ?: OAuth2Configuration;
    apiKeyAuth?: ApiKeyConfiguration;
    appKeyAuth?: ApiKeyConfiguration;
};
/**
 * Creates the authentication methods from a swagger description.
 *
 */
export declare function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
