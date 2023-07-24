import {Router} from "express";
import blogController from "../controller/productController";

const blogRouter = Router();
blogRouter.get('/', blogController.findAll);
blogRouter.post('/', blogController.add);
export default blogRouter;
