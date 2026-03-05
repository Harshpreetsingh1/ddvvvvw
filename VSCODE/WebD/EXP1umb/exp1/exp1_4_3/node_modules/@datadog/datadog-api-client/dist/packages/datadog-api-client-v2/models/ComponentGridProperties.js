"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentGridProperties = void 0;
/**
 * Properties of a grid component.
 */
class ComponentGridProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ComponentGridProperties.attributeTypeMap;
    }
}
exports.ComponentGridProperties = ComponentGridProperties;
/**
 * @ignore
 */
ComponentGridProperties.attributeTypeMap = {
    backgroundColor: {
        baseName: "backgroundColor",
        type: "string",
    },
    children: {
        baseName: "children",
        type: "Array<Component>",
    },
    isVisible: {
        baseName: "isVisible",
        type: "ComponentGridPropertiesIsVisible",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ComponentGridProperties.js.map