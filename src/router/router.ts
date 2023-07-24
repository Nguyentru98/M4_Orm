import {Router} from "express";
import productRouter from "./productRouter";
import studentRouter from "./studentRouter";
import blogRouter from "./blogRouter";


const router = Router();
router.use('/products', productRouter);
router.use('/students', studentRouter);
router.use('/blog', blogRouter);
export default router;
