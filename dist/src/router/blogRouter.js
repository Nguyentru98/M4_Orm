"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const blogRouter = (0, express_1.Router)();
blogRouter.get('/', productController_1.default.findAll);
blogRouter.post('/', productController_1.default.add);
exports.default = blogRouter;
//# sourceMappingURL=blogRouter.js.map