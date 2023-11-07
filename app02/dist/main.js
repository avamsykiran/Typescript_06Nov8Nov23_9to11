"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_1 = __importDefault(require("./welcome"));
const arrayDemo_1 = __importDefault(require("./arrayDemo"));
const numOperations_1 = __importDefault(require("./numOperations"));
const enumsDemo_1 = __importDefault(require("./enumsDemo"));
console.log((0, welcome_1.default)("Vamsy Kiran"));
console.log((0, welcome_1.default)("Sagar Guru Charan"));
(0, arrayDemo_1.default)();
console.log((0, numOperations_1.default)(169));
console.log((0, numOperations_1.default)(1024));
console.log((0, numOperations_1.default)(17));
(0, enumsDemo_1.default)();
