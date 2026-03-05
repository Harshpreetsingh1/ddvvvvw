"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsFetchUptimesPayload = void 0;
/**
 * Object containing IDs of Synthetic tests and a timeframe.
 */
class SyntheticsFetchUptimesPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsFetchUptimesPayload.attributeTypeMap;
    }
}
exports.SyntheticsFetchUptimesPayload = SyntheticsFetchUptimesPayload;
/**
 * @ignore
 */
SyntheticsFetchUptimesPayload.attributeTypeMap = {
    fromTs: {
        baseName: "from_ts",
        type: "number",
        required: true,
        format: "int64",
    },
    publicIds: {
        baseName: "public_ids",
        type: "Array<string>",
        required: true,
    },
    toTs: {
        baseName: "to_ts",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsFetchUptimesPayload.js.map