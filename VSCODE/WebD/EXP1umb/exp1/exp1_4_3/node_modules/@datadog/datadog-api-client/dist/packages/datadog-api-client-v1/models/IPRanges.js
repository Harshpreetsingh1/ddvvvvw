"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPRanges = void 0;
/**
 * IP ranges.
 */
class IPRanges {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPRanges.attributeTypeMap;
    }
}
exports.IPRanges = IPRanges;
/**
 * @ignore
 */
IPRanges.attributeTypeMap = {
    agents: {
        baseName: "agents",
        type: "IPPrefixesAgents",
    },
    api: {
        baseName: "api",
        type: "IPPrefixesAPI",
    },
    apm: {
        baseName: "apm",
        type: "IPPrefixesAPM",
    },
    global: {
        baseName: "global",
        type: "IPPrefixesGlobal",
    },
    logs: {
        baseName: "logs",
        type: "IPPrefixesLogs",
    },
    modified: {
        baseName: "modified",
        type: "string",
    },
    orchestrator: {
        baseName: "orchestrator",
        type: "IPPrefixesOrchestrator",
    },
    process: {
        baseName: "process",
        type: "IPPrefixesProcess",
    },
    remoteConfiguration: {
        baseName: "remote-configuration",
        type: "IPPrefixesRemoteConfiguration",
    },
    synthetics: {
        baseName: "synthetics",
        type: "IPPrefixesSynthetics",
    },
    syntheticsPrivateLocations: {
        baseName: "synthetics-private-locations",
        type: "IPPrefixesSyntheticsPrivateLocations",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int64",
    },
    webhooks: {
        baseName: "webhooks",
        type: "IPPrefixesWebhooks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPRanges.js.map