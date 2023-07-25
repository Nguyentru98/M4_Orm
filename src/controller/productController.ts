import {Request, Response, query} from "express";
import productService from "../service/productService";
import * as fs from "fs";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll();
        res.json(listProduct);
    }
    add = async (req: Request, res: Response) => {
        let data = await this.productService.add(req.body);
        res.json(data);
    }
    update = async (req: Request, res: Response) => {
        let data = await this.productService.update(req.params.id, req.body);
        res.json('sửa thành công');
    }
    delete = async (req: Request, res: Response) => {
        let data = await this.productService.delete(req.params.id);
        res.json('xoá thành công');
    }
    find = async (req: Request, res: Response) => {
        let data = await this.productService.find(req.query.id);
        res.json(data);
    }
    increase = async (req: Request, res: Response) => {
        let data = await this.productService.increase();
        res.json(data);
    }
    decrease = async (req: Request, res: Response) => {
        let data = await this.productService.decrease();
        res.json(data);
    }
    findByName = async (req: Request, res: Response) => {
        let data = await this.productService.findByName(req.query.name);
        res.json(data);
    }
}

export default new ProductController();
