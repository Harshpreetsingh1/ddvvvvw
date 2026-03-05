"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
/**
 * [Definition of a UI component in the app](https://docs.datadoghq.com/service_management/app_builder/components/)
 */
class Component {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Component.attributeTypeMap;
    }
}
exports.Component = Component;
/**
 * @ignore
 */
Component.attributeTypeMap = {
    events: {
        baseName: "events",
        type: "Array<AppBuilderEvent>",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    properties: {
        baseName: "properties",
        type: "ComponentProperties",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ComponentType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Component.js.map