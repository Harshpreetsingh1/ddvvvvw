"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMeta = void 0;
/**
 * Metadata associated with your host.
 */
class HostMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMeta.attributeTypeMap;
    }
}
exports.HostMeta = HostMeta;
/**
 * @ignore
 */
HostMeta.attributeTypeMap = {
    agentChecks: {
        baseName: "agent_checks",
        type: "Array<Array<any>>",
    },
    agentVersion: {
        baseName: "agent_version",
        type: "string",
    },
    cpuCores: {
        baseName: "cpuCores",
        type: "number",
        format: "int64",
    },
    fbsdV: {
        baseName: "fbsdV",
        type: "Array<any>",
    },
    gohai: {
        baseName: "gohai",
        type: "string",
    },
    installMethod: {
        baseName: "install_method",
        type: "HostMetaInstallMethod",
    },
    macV: {
        baseName: "macV",
        type: "Array<any>",
    },
    machine: {
        baseName: "machine",
        type: "string",
    },
    nixV: {
        baseName: "nixV",
        type: "Array<any>",
    },
    platform: {
        baseName: "platform",
        type: "string",
    },
    processor: {
        baseName: "processor",
        type: "string",
    },
    pythonV: {
        baseName: "pythonV",
        type: "string",
    },
    socketFqdn: {
        baseName: "socket-fqdn",
        type: "string",
    },
    socketHostname: {
        baseName: "socket-hostname",
        type: "string",
    },
    winV: {
        baseName: "winV",
        type: "Array<any>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMeta.js.map