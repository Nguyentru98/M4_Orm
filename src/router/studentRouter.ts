import {Router} from "express";
import studentsController from "../controller/studentsController";

const studentRouter = Router();
studentRouter.get('/', studentsController.findAll);
export default studentRouter;
