"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackIntegrationChannelDisplay = void 0;
/**
 * Configuration options for what is shown in an alert event message.
 */
class SlackIntegrationChannelDisplay {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SlackIntegrationChannelDisplay.attributeTypeMap;
    }
}
exports.SlackIntegrationChannelDisplay = SlackIntegrationChannelDisplay;
/**
 * @ignore
 */
SlackIntegrationChannelDisplay.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "boolean",
    },
    muteButtons: {
        baseName: "mute_buttons",
        type: "boolean",
    },
    notified: {
        baseName: "notified",
        type: "boolean",
    },
    snapshot: {
        baseName: "snapshot",
        type: "boolean",
    },
    tags: {
        baseName: "tags",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SlackIntegrationChannelDisplay.js.map