"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorState = void 0;
/**
 * Wrapper object with the different monitor states.
 */
class MonitorState {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorState.attributeTypeMap;
    }
}
exports.MonitorState = MonitorState;
/**
 * @ignore
 */
MonitorState.attributeTypeMap = {
    groups: {
        baseName: "groups",
        type: "{ [key: string]: MonitorStateGroup; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorState.js.map