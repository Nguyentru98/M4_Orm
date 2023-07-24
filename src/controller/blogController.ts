import {Request, Response} from "express";
import blogService from "../service/blogService";
import * as fs from "fs";

class BlogController {

    findAll = async (req: Request, res: Response) => {
        let listBlog = await blogService.getAll();
        res.json(listBlog);
    }
    add = async (req: Request, res: Response) => {
        let listProduct = await blogService.add(req.body);
        res.json(listProduct);
    }

}

export default new BlogController();
