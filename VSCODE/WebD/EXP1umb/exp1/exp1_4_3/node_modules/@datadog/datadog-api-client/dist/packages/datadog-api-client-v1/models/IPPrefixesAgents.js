"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPPrefixesAgents = void 0;
/**
 * Available prefix information for the Agent endpoints.
 */
class IPPrefixesAgents {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPPrefixesAgents.attributeTypeMap;
    }
}
exports.IPPrefixesAgents = IPPrefixesAgents;
/**
 * @ignore
 */
IPPrefixesAgents.attributeTypeMap = {
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
//# sourceMappingURL=IPPrefixesAgents.js.map