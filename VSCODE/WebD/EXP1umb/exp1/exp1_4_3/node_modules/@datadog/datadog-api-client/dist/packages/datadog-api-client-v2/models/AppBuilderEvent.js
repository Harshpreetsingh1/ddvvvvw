"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBuilderEvent = void 0;
/**
 * An event on a UI component that triggers a response or action in an app.
 */
class AppBuilderEvent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AppBuilderEvent.attributeTypeMap;
    }
}
exports.AppBuilderEvent = AppBuilderEvent;
/**
 * @ignore
 */
AppBuilderEvent.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "AppBuilderEventName",
    },
    type: {
        baseName: "type",
        type: "AppBuilderEventType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AppBuilderEvent.js.map