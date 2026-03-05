"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPPrefixesSyntheticsPrivateLocations = void 0;
/**
 * Available prefix information for the Synthetics Private Locations endpoints.
 */
class IPPrefixesSyntheticsPrivateLocations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPPrefixesSyntheticsPrivateLocations.attributeTypeMap;
    }
}
exports.IPPrefixesSyntheticsPrivateLocations = IPPrefixesSyntheticsPrivateLocations;
/**
 * @ignore
 */
IPPrefixesSyntheticsPrivateLocations.attributeTypeMap = {
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
//# sourceMappingURL=IPPrefixesSyntheticsPrivateLocations.js.map