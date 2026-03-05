"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFrameWidgetDefinition = void 0;
/**
 * The iframe widget allows you to embed a portion of any other web page on your dashboard. Only available on FREE layout dashboards.
 */
class IFrameWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IFrameWidgetDefinition.attributeTypeMap;
    }
}
exports.IFrameWidgetDefinition = IFrameWidgetDefinition;
/**
 * @ignore
 */
IFrameWidgetDefinition.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "IFrameWidgetDefinitionType",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IFrameWidgetDefinition.js.map