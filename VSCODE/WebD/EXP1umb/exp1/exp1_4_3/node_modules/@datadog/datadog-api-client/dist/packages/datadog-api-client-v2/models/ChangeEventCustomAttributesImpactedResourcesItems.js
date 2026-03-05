"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventCustomAttributesImpactedResourcesItems = void 0;
/**
 * Object representing a uniquely identified resource.
 */
class ChangeEventCustomAttributesImpactedResourcesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventCustomAttributesImpactedResourcesItems.attributeTypeMap;
    }
}
exports.ChangeEventCustomAttributesImpactedResourcesItems = ChangeEventCustomAttributesImpactedResourcesItems;
/**
 * @ignore
 */
ChangeEventCustomAttributesImpactedResourcesItems.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ChangeEventCustomAttributesImpactedResourcesItemsType",
        required: true,
    },
};
//# sourceMappingURL=ChangeEventCustomAttributesImpactedResourcesItems.js.map