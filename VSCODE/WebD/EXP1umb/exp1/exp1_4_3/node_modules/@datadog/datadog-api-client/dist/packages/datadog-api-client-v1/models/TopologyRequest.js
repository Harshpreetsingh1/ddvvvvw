"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologyRequest = void 0;
/**
 * Request that will return nodes and edges to be used by topology map.
 */
class TopologyRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TopologyRequest.attributeTypeMap;
    }
}
exports.TopologyRequest = TopologyRequest;
/**
 * @ignore
 */
TopologyRequest.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "TopologyQuery",
    },
    requestType: {
        baseName: "request_type",
        type: "TopologyRequestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TopologyRequest.js.map