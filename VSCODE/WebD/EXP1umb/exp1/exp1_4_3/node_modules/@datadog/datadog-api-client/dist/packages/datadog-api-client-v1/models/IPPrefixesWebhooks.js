"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPPrefixesWebhooks = void 0;
/**
 * Available prefix information for the Webhook endpoints.
 */
class IPPrefixesWebhooks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPPrefixesWebhooks.attributeTypeMap;
    }
}
exports.IPPrefixesWebhooks = IPPrefixesWebhooks;
/**
 * @ignore
 */
IPPrefixesWebhooks.attributeTypeMap = {
    prefixesIpv4: {
        baseName: "prefixes_ipv4",
        type: "Array<string>",
    },
    prefixesIpv6: {
        baseName: "prefixes_ipv6",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPPrefixesWebhooks.js.map