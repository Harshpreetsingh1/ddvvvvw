"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookRelativeTime = void 0;
/**
 * Relative timeframe.
 */
class NotebookRelativeTime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookRelativeTime.attributeTypeMap;
    }
}
exports.NotebookRelativeTime = NotebookRelativeTime;
/**
 * @ignore
 */
NotebookRelativeTime.attributeTypeMap = {
    liveSpan: {
        baseName: "live_span",
        type: "WidgetLiveSpan",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookRelativeTime.js.map