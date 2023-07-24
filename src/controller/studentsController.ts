import {Request, Response} from "express";
import studentService from "../service/studentService";
import * as fs from "fs";

class StudentController {
    private studentService;

    constructor() {
        this.studentService = studentService;
    }

    findAll = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.getAll();
        res.json(listStudent);
    }

}

export default new StudentController();
