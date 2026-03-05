"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Host = void 0;
/**
 * Object representing a host.
 */
class Host {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Host.attributeTypeMap;
    }
}
exports.Host = Host;
/**
 * @ignore
 */
Host.attributeTypeMap = {
    aliases: {
        baseName: "aliases",
        type: "Array<string>",
    },
    apps: {
        baseName: "apps",
        type: "Array<string>",
    },
    awsName: {
        baseName: "aws_name",
        type: "string",
    },
    hostName: {
        baseName: "host_name",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    isMuted: {
        baseName: "is_muted",
        type: "boolean",
    },
    lastReportedTime: {
        baseName: "last_reported_time",
        type: "number",
        format: "int64",
    },
    meta: {
        baseName: "meta",
        type: "HostMeta",
    },
    metrics: {
        baseName: "metrics",
        type: "HostMetrics",
    },
    muteTimeout: {
        baseName: "mute_timeout",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
    },
    tagsBySource: {
        baseName: "tags_by_source",
        type: "{ [key: string]: Array<string>; }",
    },
    up: {
        baseName: "up",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Host.js.map