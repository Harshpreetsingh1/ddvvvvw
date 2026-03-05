"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentGrid = void 0;
/**
 * A grid component. The grid component is the root canvas for an app and contains all other components.
 */
class ComponentGrid {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ComponentGrid.attributeTypeMap;
    }
}
exports.ComponentGrid = ComponentGrid;
/**
 * @ignore
 */
ComponentGrid.attributeTypeMap = {
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
        type: "ComponentGridProperties",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ComponentGridType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ComponentGrid.js.map