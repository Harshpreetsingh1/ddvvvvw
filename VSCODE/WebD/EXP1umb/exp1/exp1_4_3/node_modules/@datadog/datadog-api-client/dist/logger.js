"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const loglevel_1 = __importDefault(require("loglevel"));
const logger = loglevel_1.default.noConflict();
exports.logger = logger;
logger.setLevel((typeof process !== "undefined" && process.env && process.env.DEBUG) ? logger.levels.DEBUG : logger.levels.INFO);
//# sourceMappingURL=logger.js.map