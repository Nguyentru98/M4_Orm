import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('', productController.findAll);
productRouter.post('/', productController.add);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);
productRouter.get('/find', productController.find);
productRouter.get('/asc', productController.increase);
productRouter.get('/desc', productController.decrease);
productRouter.get('/:id', productController.findById);
export default productRouter;
