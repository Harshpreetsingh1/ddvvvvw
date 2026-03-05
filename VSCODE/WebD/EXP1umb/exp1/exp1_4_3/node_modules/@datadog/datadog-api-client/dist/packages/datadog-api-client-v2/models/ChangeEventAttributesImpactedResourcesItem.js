"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventAttributesImpactedResourcesItem = void 0;
/**
 * A uniquely identified resource.
 */
class ChangeEventAttributesImpactedResourcesItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventAttributesImpactedResourcesItem.attributeTypeMap;
    }
}
exports.ChangeEventAttributesImpactedResourcesItem = ChangeEventAttributesImpactedResourcesItem;
/**
 * @ignore
 */
ChangeEventAttributesImpactedResourcesItem.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ChangeEventAttributesImpactedResourcesItemType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeEventAttributesImpactedResourcesItem.js.map