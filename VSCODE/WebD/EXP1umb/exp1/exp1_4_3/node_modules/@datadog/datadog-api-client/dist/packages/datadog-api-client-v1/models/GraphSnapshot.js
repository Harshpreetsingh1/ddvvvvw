"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphSnapshot = void 0;
/**
 * Object representing a graph snapshot.
 */
class GraphSnapshot {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GraphSnapshot.attributeTypeMap;
    }
}
exports.GraphSnapshot = GraphSnapshot;
/**
 * @ignore
 */
GraphSnapshot.attributeTypeMap = {
    graphDef: {
        baseName: "graph_def",
        type: "string",
    },
    metricQuery: {
        baseName: "metric_query",
        type: "string",
    },
    snapshotUrl: {
        baseName: "snapshot_url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GraphSnapshot.js.map