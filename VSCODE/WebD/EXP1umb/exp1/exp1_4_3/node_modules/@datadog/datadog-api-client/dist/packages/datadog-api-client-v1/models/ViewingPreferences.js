"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewingPreferences = void 0;
/**
 * The viewing preferences for a shared dashboard.
 */
class ViewingPreferences {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ViewingPreferences.attributeTypeMap;
    }
}
exports.ViewingPreferences = ViewingPreferences;
/**
 * @ignore
 */
ViewingPreferences.attributeTypeMap = {
    highDensity: {
        baseName: "high_density",
        type: "boolean",
    },
    theme: {
        baseName: "theme",
        type: "ViewingPreferencesTheme",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ViewingPreferences.js.map