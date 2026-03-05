"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackIntegrationChannel = void 0;
/**
 * The Slack channel configuration.
 */
class SlackIntegrationChannel {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SlackIntegrationChannel.attributeTypeMap;
    }
}
exports.SlackIntegrationChannel = SlackIntegrationChannel;
/**
 * @ignore
 */
SlackIntegrationChannel.attributeTypeMap = {
    display: {
        baseName: "display",
        type: "SlackIntegrationChannelDisplay",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SlackIntegrationChannel.js.map