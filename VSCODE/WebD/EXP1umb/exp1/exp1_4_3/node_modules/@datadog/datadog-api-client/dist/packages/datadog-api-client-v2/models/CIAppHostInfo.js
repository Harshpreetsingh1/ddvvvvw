"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppHostInfo = void 0;
/**
 * Contains information of the host running the pipeline, stage, job, or step.
 */
class CIAppHostInfo {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppHostInfo.attributeTypeMap;
    }
}
exports.CIAppHostInfo = CIAppHostInfo;
/**
 * @ignore
 */
CIAppHostInfo.attributeTypeMap = {
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    labels: {
        baseName: "labels",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    workspace: {
        baseName: "workspace",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppHostInfo.js.map