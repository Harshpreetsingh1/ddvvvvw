"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.AppKeyAuthAuthentication = exports.ApiKeyAuthAuthentication = exports.AuthZAuthentication = void 0;
/**
 * Applies oauth2 authentication to the request context.
 */
class AuthZAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    getName() {
        return "AuthZ";
    }
    applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}
exports.AuthZAuthentication = AuthZAuthentication;
/**
 * Applies apiKey authentication to the request context.
 */
class ApiKeyAuthAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getName() {
        return "apiKeyAuth";
    }
    applySecurityAuthentication(context) {
        context.setHeaderParam("DD-API-KEY", this.apiKey);
    }
}
exports.ApiKeyAuthAuthentication = ApiKeyAuthAuthentication;
/**
 * Applies apiKey authentication to the request context.
 */
class AppKeyAuthAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getName() {
        return "appKeyAuth";
    }
    applySecurityAuthentication(context) {
        context.setHeaderParam("DD-APPLICATION-KEY", this.apiKey);
    }
}
exports.AppKeyAuthAuthentication = AppKeyAuthAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    const authMethods = {};
    if (!config) {
        return authMethods;
    }
    if (config["AuthZ"]) {
        authMethods["AuthZ"] = new AuthZAuthentication(config["AuthZ"]["accessToken"]);
    }
    if (config["apiKeyAuth"]) {
        authMethods["apiKeyAuth"] = new ApiKeyAuthAuthentication(config["apiKeyAuth"]);
    }
    if (config["appKeyAuth"]) {
        authMethods["appKeyAuth"] = new AppKeyAuthAuthentication(config["appKeyAuth"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map