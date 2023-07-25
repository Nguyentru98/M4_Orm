"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const productRouter = (0, express_1.Router)();
productRouter.get('', productController_1.default.findAll);
productRouter.post('/', productController_1.default.add);
productRouter.put('/:id', productController_1.default.update);
productRouter.delete('/:id', productController_1.default.delete);
productRouter.get('/find', productController_1.default.find);
productRouter.get('/asc', productController_1.default.increase);
productRouter.get('/desc', productController_1.default.decrease);
productRouter.get('/findByName', productController_1.default.findByName);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map