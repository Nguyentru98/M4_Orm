"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    Students: true,
                },
            });
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.delete = async (data) => {
            return await this.productRepository.delete(data);
        };
        this.update = async (id, data) => {
            return await this.productRepository.update(id, data);
        };
        this.find = async (text) => {
            return await this.productRepository.find({
                where: {
                    name: text,
                },
            });
        };
        this.increase = async () => {
            return await this.productRepository.find({ order: { price: 'ASC' } });
        };
        this.decrease = async () => {
            return await this.productRepository.find({ order: { price: 'DESC' } });
        };
        this.findByName = async (name) => {
            console.log(name);
            return await this.productRepository.find({
                where: {
                    name: name
                },
            });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.ProductPro);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map