"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentProperties = void 0;
/**
 * Properties of a UI component. Different component types can have their own additional unique properties. See the [components documentation](https://docs.datadoghq.com/service_management/app_builder/components/) for more detail on each component type and its properties.
 */
class ComponentProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ComponentProperties.attributeTypeMap;
    }
}
exports.ComponentProperties = ComponentProperties;
/**
 * @ignore
 */
ComponentProperties.attributeTypeMap = {
    children: {
        baseName: "children",
        type: "Array<Component>",
    },
    isVisible: {
        baseName: "isVisible",
        type: "ComponentPropertiesIsVisible",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ComponentProperties.js.map