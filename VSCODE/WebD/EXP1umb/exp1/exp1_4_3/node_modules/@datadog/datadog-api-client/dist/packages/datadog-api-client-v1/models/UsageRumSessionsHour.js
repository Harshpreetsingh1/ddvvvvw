"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRumSessionsHour = void 0;
/**
 * Number of RUM sessions recorded for each hour for a given organization.
 */
class UsageRumSessionsHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageRumSessionsHour.attributeTypeMap;
    }
}
exports.UsageRumSessionsHour = UsageRumSessionsHour;
/**
 * @ignore
 */
UsageRumSessionsHour.attributeTypeMap = {
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    replaySessionCount: {
        baseName: "replay_session_count",
        type: "number",
        format: "int64",
    },
    sessionCount: {
        baseName: "session_count",
        type: "number",
        format: "int64",
    },
    sessionCountAndroid: {
        baseName: "session_count_android",
        type: "number",
        format: "int64",
    },
    sessionCountFlutter: {
        baseName: "session_count_flutter",
        type: "number",
        format: "int64",
    },
    sessionCountIos: {
        baseName: "session_count_ios",
        type: "number",
        format: "int64",
    },
    sessionCountReactnative: {
        baseName: "session_count_reactnative",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageRumSessionsHour.js.map