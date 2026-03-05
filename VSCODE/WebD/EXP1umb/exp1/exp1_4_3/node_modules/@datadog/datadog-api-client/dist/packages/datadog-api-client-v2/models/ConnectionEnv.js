"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionEnv = void 0;
/**
 * A list of connections or connection groups used in the workflow.
 */
class ConnectionEnv {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConnectionEnv.attributeTypeMap;
    }
}
exports.ConnectionEnv = ConnectionEnv;
/**
 * @ignore
 */
ConnectionEnv.attributeTypeMap = {
    connectionGroups: {
        baseName: "connectionGroups",
        type: "Array<ConnectionGroup>",
    },
    connections: {
        baseName: "connections",
        type: "Array<Connection>",
    },
    env: {
        baseName: "env",
        type: "ConnectionEnvEnv",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConnectionEnv.js.map