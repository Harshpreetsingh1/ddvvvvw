"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationServers = exports.servers = exports.server3 = exports.server2 = exports.server1 = exports.ServerConfiguration = exports.BaseServerConfiguration = void 0;
const http_1 = require("./http/http");
/**
 *
 * Represents the configuration of a server
 *
 */
class BaseServerConfiguration {
    constructor(url, variableConfiguration) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    clone() {
        return new BaseServerConfiguration(this.url, Object.assign({}, this.variableConfiguration));
    }
    getUrl() {
        let replacedUrl = this.url;
        for (const key in this.variableConfiguration) {
            const re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    }
    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
    makeRequestContext(endpoint, httpMethod) {
        return new http_1.RequestContext(this.getUrl() + endpoint, httpMethod);
    }
}
exports.BaseServerConfiguration = BaseServerConfiguration;
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
class ServerConfiguration extends BaseServerConfiguration {
}
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration("https://{subdomain}.{site}", {
    site: "datadoghq.com",
    subdomain: "api",
});
exports.server2 = new ServerConfiguration("{protocol}://{name}", {
    name: "api.datadoghq.com",
    protocol: "https",
});
exports.server3 = new ServerConfiguration("https://{subdomain}.{site}", {
    site: "datadoghq.com",
    subdomain: "api",
});
exports.servers = [exports.server1, exports.server2, exports.server3];
exports.operationServers = {
    "v1.IPRangesApi.getIPRanges": [
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "ip-ranges",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "ip-ranges.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.datadoghq.com", {
            subdomain: "ip-ranges",
        }),
    ],
    "v1.LogsApi.submitLog": [
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "http-intake.logs",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "http-intake.logs.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "http-intake.logs",
        }),
    ],
    "v2.EventsApi.createEvent": [
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "event-management-intake",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "event-management-intake.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "event-management-intake",
        }),
    ],
    "v2.LogsApi.submitLog": [
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "http-intake.logs",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "http-intake.logs.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "http-intake.logs",
        }),
    ],
    "v2.OnCallPagingApi.acknowledgeOnCallPage": [
        new ServerConfiguration("https://{site}", {
            site: "navy.oncall.datadoghq.com",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "api.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "api",
        }),
    ],
    "v2.OnCallPagingApi.createOnCallPage": [
        new ServerConfiguration("https://{site}", {
            site: "navy.oncall.datadoghq.com",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "api.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "api",
        }),
    ],
    "v2.OnCallPagingApi.escalateOnCallPage": [
        new ServerConfiguration("https://{site}", {
            site: "navy.oncall.datadoghq.com",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "api.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "api",
        }),
    ],
    "v2.OnCallPagingApi.resolveOnCallPage": [
        new ServerConfiguration("https://{site}", {
            site: "navy.oncall.datadoghq.com",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "api.datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "api",
        }),
    ],
    "v2.ProductAnalyticsApi.submitProductAnalyticsEvent": [
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "browser-intake",
        }),
        new ServerConfiguration("{protocol}://{name}", {
            name: "browser-intake-datadoghq.com",
            protocol: "https",
        }),
        new ServerConfiguration("https://{subdomain}.{site}", {
            site: "datadoghq.com",
            subdomain: "browser-intake",
        }),
    ],
};
//# sourceMappingURL=servers.js.map