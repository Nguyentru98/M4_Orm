"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.json(listProduct);
        };
        this.add = async (req, res) => {
            let data = await this.productService.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await this.productService.update(req.params.id, req.body);
            res.json('sửa thành công');
        };
        this.delete = async (req, res) => {
            let data = await this.productService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.find = async (req, res) => {
            let data = await this.productService.find(req.query.id);
            res.json(data);
        };
        this.increase = async (req, res) => {
            let data = await this.productService.increase();
            res.json(data);
        };
        this.decrease = async (req, res) => {
            let data = await this.productService.decrease();
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await this.productService.findById(req.params.id);
            res.json(data);
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map