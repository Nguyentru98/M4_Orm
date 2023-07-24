"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = __importDefault(require("../service/blogService"));
class BlogController {
    constructor() {
        this.findAll = async (req, res) => {
            let listBlog = await blogService_1.default.getAll();
            res.json(listBlog);
        };
        this.add = async (req, res) => {
            let listProduct = await blogService_1.default.add(req.body);
            res.json(listProduct);
        };
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blogController.js.map